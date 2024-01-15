import React from 'react';
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Header from './component/Header';


const App141 = () => {
    return (
        <>
            <Header/>
            <hr />
            <Routes>
                <Route path='/' Component={HomePage}></Route>
                <Route path='/login' Component={LoginPage}></Route>
                {/* Dynamic segment 사용 -> props 로 넘겨진다 useParams로 받을 수 있다. */}
                <Route path='/login/:id' Component={LoginPage}></Route>                
            </Routes>
            
            {/* <a href="aaa">링크</a> */}
            <hr /><h3>푸터 였던것...</h3>
        </>
    );
};

export default App141;