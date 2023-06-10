from django.shortcuts import render
import os
from django.conf import settings
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Portfolio
from .serializers import PortfolioSerializer
import pandas as pd
import backtrader as bt
import FinanceDataReader as fdr
from pypfopt.efficient_frontier import EfficientFrontier
from pypfopt import risk_models
from pypfopt import expected_returns
from pypfopt.discrete_allocation import DiscreteAllocation, get_latest_prices
from rest_framework import status
from rest_framework import viewsets
from django.http import FileResponse
from django.conf import settings
import shutil


class MyStrategy(bt.Strategy):
    params = (
        ('weights', {}),
    )

    def __init__(self):
        self.orders = {}

        for symbol, weight in self.params.weights.items():
            self.orders[symbol] = None

    def notify_order(self, order):
        if order.status in [order.Completed]:
            if order.isbuy():
                self.orders[order.data._name] = order.executed.price
            elif order.issell():
                self.orders[order.data._name] = None

    def next(self):
        portfolio_value = self.broker.getvalue()
        total_weights = sum(self.params.weights.values())

        for data in self.datas:
            symbol = data._name
            weight = self.params.weights(symbol, 0)

            if self.orders[symbol] is None:
                size = (portfolio_value * weight) / total_weights
                self.order_target_percent(data=data, target=weight)


class PortfolioViewSet(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=False)
        if not serializer.is_valid():  # 수정된 부분
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        self.perform_create(serializer)
        portfolio = serializer.instance

        df = pd.read_csv(os.path.join(
            settings.MEDIA_ROOT, 'stock_prices.csv'), parse_dates=True, index_col="date")
        mu = expected_returns.mean_historical_return(df)
        S = risk_models.sample_cov(df)

        ef = EfficientFrontier(mu, S)

        if portfolio.importance == 1:
            raw_weights = ef.efficient_risk(portfolio.risk)
        elif portfolio.importance == 0:
            raw_weights = ef.efficient_return(portfolio.profit)
        else:
            raw_weights = ef.max_sharpe()
        cleaned_weights = ef.clean_weights()
        weights_file_path = os.path.join(settings.MEDIA_ROOT, 'weights.csv')
        ef.save_weights_to_file(weights_file_path)

        latest_prices = get_latest_prices(df)
        da = DiscreteAllocation(
            cleaned_weights, latest_prices, total_portfolio_value=portfolio.amount)
        allocation, leftover = da.greedy_portfolio()
        ef.portfolio_performance(verbose=True)

        old_key = 'FB'
        new_key = 'META'
        symbols = ['GOOG', 'AAPL', 'META', 'BABA', 'AMZN', 'GE', 'AMD', 'WMT', 'BAC',
                   'GM', 'T', 'UAA', 'SHLD', 'XOM', 'RRC', 'BBY', 'MA', 'PFE', 'JPM', 'SBUX']
        dataframes = {}
        for symbol in symbols:
            df = fdr.DataReader(symbol, start='2021-12-01', end='2022-12-31')
            dataframes[symbol] = df

        value = cleaned_weights[old_key]
        del cleaned_weights[old_key]
        cleaned_weights[new_key] = value
        datafeeds = [bt.feeds.PandasData(
            dataname=dataframes[symbol]) for symbol in symbols]
        weights = cleaned_weights

        cerebro = bt.Cerebro()
        cerebro.addstrategy(MyStrategy, weights=weights)

        for datafeed, symbol in zip(datafeeds, symbols):
            cerebro.adddata(datafeed, name=symbol)

        cerebro.run()

        # Retrieve the strategy instance
        strategy = cerebro.runstrats[0][0]

        # Get the portfolio values
        portfolio_values = strategy.broker.get_value()

        backtest_result = run_backtest(cleaned_weights)

        # Return the portfolio values as a response
        response_data = {
            'cleaned_weights': cleaned_weights,
            'allocation': allocation,
            'leftover_funds': leftover,
            '예상 수익률': "{:.2f}%".format(ef.portfolio_performance()[0] * 100),
            '연간 변동성': "{:.2f}%".format(ef.portfolio_performance()[1] * 100),
            '샤프 지수': ef.portfolio_performance()[2],
            'file': settings.MEDIA_URL + 'weights.csv',
            'backtest_result': backtest_result,
        }
        return Response(response_data, status=status.HTTP_201_CREATED)
def run_backtest(cleaned_weights):
    # Remove weights with a value of 0
    cleaned_weights = {symbol: weight for symbol, weight in cleaned_weights.items() if weight != 0}

    # Rename key
    old_key = 'FB'
    new_key = 'META'
    symbols = ['GOOG', 'AAPL', 'META', 'BABA', 'AMZN', 'GE', 'AMD', 'WMT', 'BAC', 'GM', 'T', 'UAA', 'SHLD', 'XOM', 'RRC', 'BBY', 'MA', 'PFE', 'JPM', 'SBUX']
    dataframes = {symbol: fdr.DataReader(symbol, start='2019-01-01', end='2022-12-31') for symbol in symbols}

    # Save the value associated with the old key
    value = cleaned_weights[old_key]

    # Remove the old key-value pair
    del cleaned_weights[old_key]

    # Add the new key-value pair
    cleaned_weights[new_key] = value

    # Convert DataFrame to PandasData
    datafeeds = [bt.feeds.PandasData(dataname=dataframes[symbol]) for symbol in symbols]

    # Enter weights for each symbol
    weights = cleaned_weights

    cerebro = bt.Cerebro()

    # Set the backtesting strategy
    cerebro.addstrategy(MyStrategy, weights=weights)

    # Add data feeds to cerebro
    for datafeed, symbol in zip(datafeeds, symbols):
        if symbol in weights:
            cerebro.adddata(datafeed, name=symbol)

    cerebro.run()

    # Save the backtest result as an image
    img_path = os.path.join(settings.MEDIA_ROOT, 'back.png')
    cerebro.plot(iplot=False, style="candle", barup="red", bardown="blue", filename=img_path)

    return img_path


