import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import 'chart.js/auto';

const Piechart = () => {
  const cleanedWeights = useSelector((state) => state.cleanedWeights);
  
  const filteredWeights = {};
  for (const [key, value] of Object.entries(cleanedWeights)) {
    if (typeof value === 'number' && !isNaN(value) && value !== 0) {
      filteredWeights[key] = value;
    }
  }
  const backgroundColor = [
    '#f76b8a',
    '#13D8F6',
    '#FFD700',
    '#7CFC00',
    '#FF4500',
    '#9400D3',
    '#00FF00',
    '#FF1493',
    '#00BFFF',
    '#FF6347',
    '#9932CC',
    '#8B0000',
    '#32CD32',
    '#8A2BE2',
    '#FF8C00',
    '#00CED1',
    '#FF00FF',
    '#00FFFF',
    '#FF69B4',
    '#7B68EE',
  ];
  const data = {
    labels: Object.keys(filteredWeights),
    datasets: [
      {
       
        data: Object.values(filteredWeights),
        backgroundColor: backgroundColor,
        hoverBorderColor: 'rgba(234, 236, 244, 1)',
        cutout: '60%',
      },
    ],
  };

  const options = {};

  return (
    <div className="chart doughnut">
    <Doughnut
        data={data}
        options={options}
    />
</div>
  );
};

export default Piechart;
