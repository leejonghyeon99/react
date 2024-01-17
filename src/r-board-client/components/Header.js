import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Header = (page) => {

    let {pageName,subject} = page;  
    if(subject){
        subject = " - " + subject;
    }
   
    return (
        <div>
            <Navbar>
                <Nav className='mt-2'><h1>{pageName}{subject}</h1></Nav>
            </Navbar>        
            <hr />    
        </div>
    );
};

export default Header;