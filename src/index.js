import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App02 from './02/App02'; //chp02 리액트 구조
import App021 from './02/App021';
import App031 from './03/App031'; // JSX 기초
import App032 from './03/App032'; //CSS 적용하기
import App041 from './04/App041';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App041/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
