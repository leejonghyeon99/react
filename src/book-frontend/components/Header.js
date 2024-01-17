import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
         <Navbar bg='dark' data-bs-theme="dark">
            <Link to="/" className="navbar-brand">홈</Link> 
            <Nav>
                <Link to="/saveForm" className="navbar-brand">글 쓰기</Link> 
                <Link to="/updateForm" className="navbar-brand">책 수정</Link> 
            </Nav>            
        </Navbar>   
        </>
    );
};

export default Header;