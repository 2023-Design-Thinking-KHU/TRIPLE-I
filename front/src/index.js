import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Router/HomePage';
import TestPage from './Router/TestPage';
import Portfolio from './Router/Portfolio';
import Result from './Router/Result';
import Explanation from './Router/Explanation';
import Modal from './component/Modal';
import SignIn from './Router/SignIn';
import SignUp from './Router/SignUp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
