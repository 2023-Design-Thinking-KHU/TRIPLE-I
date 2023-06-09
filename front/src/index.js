import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import HomePage from './Router/HomePage';
import TestPage from './Router/TestPage';
import Portfolio from './Router/Portfolio';
import Result from './Router/Result';
import Explanation from './Router/Explanation';
import Modal from './component/Modal';
import SignIn from './Router/SignIn';
import SignUp from './Router/SignUp';
import reportWebVitals from './reportWebVitals';

// Define the initial state
const initialState = {
  isLoggedIn:false,
  pk:null,

  username: null,
  email:"",
  propensity:"",

  amount:null,
  importance:null,
  profit:null,
  risk:null,

  allocation:null,
  cleanedWeights:null,
  leftoverFunds:null,
  sharpIndex:null,
  volatility:null,
  expectedReturn:null,
  weight:null,
};

// Define the reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_PK':
      return {
        ...state,
        pk: action.payload,
      };
    case 'UPDATE_login':
      return {
        ...state,
        isLoggedIn:action.payload,
      }
    case 'UPDATE_username':
      return{
        ...state,
        username:action.payload,
      }
    case 'UPDATE_email':
      return {
        ...state,
        email:action.payload,
      }
    case 'UPDATE_propensity':
      return{
        ...state,
        propensity:action.payload,
      }
    case 'UPDATE_amount':
      return{
        ...state,
        amount:action.payload,
      }
    case 'UPDATE_risk':
        return{
          ...state,
          risk:action.payload,
        }
    case 'UPDATE_profit':
        return{
            ...state,
            profit:action.payload,
          }
    case 'UPDATE_importance':
        return{
          ...state,
          importance:action.payload,
        }
    case 'UPDATE_allocation':
      return{
        ...state,
        allocation:action.payload,
      }
      case 'UPDATE_cleanedWeights':
      return{
        ...state,
        cleanedWeights:action.payload,
      }
      case 'UPDATE_leftoverFunds':
      return{
        ...state,
        leftoverFunds:action.payload,
      }
      case 'UPDATE_sharpIndex':
      return{
        ...state,
        sharpIndex:action.payload,
      }
      case 'UPDATE_volatility':
      return{
        ...state,
        volatility:action.payload,
      }
      case 'UPDATE_expectedReturn':
      return{
        ...state,
        expectedReturn:action.payload,
      }
      case 'UPDATE_weight':
      return{
        ...state,
        weight:action.payload,
      }
    default:
      return state;
  }
}
// Create the Redux store
const store = createStore(reducer);

// Render the app with Redux provider
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Test" element={<TestPage />} />
          <Route path="/Main" element={<Portfolio />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Explanation" element={<Explanation />} />
          <Route path="/Modal" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
