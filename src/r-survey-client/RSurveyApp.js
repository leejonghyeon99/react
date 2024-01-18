import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';
import DetailPage from './pages/DetailPage';
import UpdatePage from './pages/UpdatePage';
import { Container } from 'react-bootstrap';





const RSurveyApp = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Navigate to="/list"></Navigate>}></Route>
        <Route path='/list' Component={ListPage}></Route>
        <Route path='/write' Component={WritePage}></Route>
        <Route path='/detail/:id' Component={DetailPage}></Route>
        <Route path='/update/:id' Component={UpdatePage}></Route>
      </Routes>      
    </Container>
  );
};

export default RSurveyApp;