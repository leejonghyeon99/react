import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import ListPage from './pages/post/ListPage';
import WritePage from './pages/post/WritePage';
import DetailPage from './pages/post/DetailPage';
import UpdatePage from './pages/post/UpdatePage';
import { Container } from 'react-bootstrap';


const RBoardApp = () => {
    
    return (
        <>            
        <Container>                    
            <Routes>
                <Route path='/'  element={<Navigate to="/list"></Navigate>}></Route>
                <Route path='/list' Component={ListPage}></Route>
                <Route path='/write' Component={WritePage}></Route>
                <Route path='/detail/:id' Component={DetailPage}></Route>
                <Route path='/update/:id' Component={UpdatePage}></Route>
            </Routes>            
        </Container>      
        </>
    );
};

export default RBoardApp;