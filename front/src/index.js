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

  sum1:0,
  sum2:0,
  sum3:0,
  sum4:0,
  sum5:0,
  sum6:0,
  sum7:0,
  sum8:0,
  sum9:0,
  sum10:0,
  sum11:0,
  sum12:0,

  danger:0,
  correct:0,

  state1:false,
  state2:false,
  state3:false,
  state4:false,
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
      case 'UPDATE_sum1':
      return{
        ...state,
        sum1:action.payload,
      }
      case 'UPDATE_sum2':
      return{
        ...state,
        sum2:action.payload,
      }
      case 'UPDATE_sum3':
      return{
        ...state,
        sum3:action.payload,
      }
      case 'UPDATE_sum4':
      return{
        ...state,
        sum4:action.payload,
      }
      case 'UPDATE_sum5':
      return{
        ...state,
        sum5:action.payload,
      }
      case 'UPDATE_sum6':
      return{
        ...state,
        sum6:action.payload,
      }
      case 'UPDATE_sum7':
      return{
        ...state,
        sum7:action.payload,
      }
      case 'UPDATE_sum8':
      return{
        ...state,
        sum8:action.payload,
      }
      case 'UPDATE_sum9':
      return{
        ...state,
        sum9:action.payload,
      }
      case 'UPDATE_sum10':
      return{
        ...state,
        sum10:action.payload,
      }
      case 'UPDATE_sum11':
      return{
        ...state,
        sum11:action.payload,
      }
      case 'UPDATE_sum12':
      return{
        ...state,
        sum12:action.payload,
      }
      case 'UPDATE_danger':
      return{
        ...state,
        danger:action.payload,
      }
      case 'UPDATE_correct':
      return{
        ...state,
        correct:action.payload,
      }
      case 'UPDATE_state1':
      return{
        ...state,
        state1:action.payload,
      }
      case 'UPDATE_state1':
        return{
          ...state,
          state1:action.payload,
        }
      case 'UPDATE_state2':
         return{
            ...state,
            state2:action.payload,
        }  
        case 'UPDATE_state3':
          return{
            ...state,
            state3:action.payload,
          }
          case 'UPDATE_state4':
            return{
              ...state,
              state4:action.payload,
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
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
