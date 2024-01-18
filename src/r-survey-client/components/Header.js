import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


const Header = (page) => {

    let {pageName} = page;  
   
    return (
        <div>
            <Navbar>
                <Nav className='mt-2'><h1>{pageName}</h1></Nav>
            </Navbar>        
            <hr />    
        </div>
    );
};

export default Header;