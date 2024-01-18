import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import App02 from './02/App02'; //chp02 리액트 구조
import App021 from './02/App021';
import App031 from './03/App031'; // JSX 기초
import App032 from './03/App032'; //CSS 적용하기
import App041 from './04/App041'; //component
import App042 from './04/App042'; //데이터(들) 렌더링
import App061 from './06/App061';
import App062 from './06/App062'; //useState() 배열 상태값 관리
import App071 from './07/App071'; //useEffect() 
import App081 from './08/App081'; //useMemo
import App091 from './09/App091'; //useRefs
import App101 from './10/App101';
import MyStudy from './my/MyStudy';
import App102 from './10/App102'; //styled-component로 style 적용하는 방법 
import App103 from './10/App103'; //props 외 
import App141 from './14/App141'; //react-router-dom
import App151 from './15/App151'; //간단 게시판, 자식이 다른 자식의 데이터 조작은 불가
import App152 from './152/App152';

import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import RBoardApp from './r-board-client/RBoardApp';
import RSurveyApp from './r-survey-client/RSurveyApp';

// import App181 from './181/App181';
// import App182 from './182/App182';
// import BookApp from './book-frontend/BookApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <RSurveyApp/>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
