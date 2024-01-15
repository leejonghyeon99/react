import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledHeaderDiv = styled.div`
    border: 2px solid blue;
    margin: 10px;
`;

//styled.Link <-- 존재 x
const StyledHeadLink = styled(Link)`
    color: red;
    text-decoration: none;
`;

const Header = () => {
    return (
        <StyledHeaderDiv>
            <ul>
                {
                /* a태그를 사용하며 화며 전체가 리로딩 발생한다.
                <li><a href="/">HOME</a></li>
                <li><a href="/login">LOGIN</a></li> 
                */}

                <li><Link to="/">HOME</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
                <li><StyledHeadLink to="login/10">LOGIN/10</StyledHeadLink></li>
                
            </ul>
        </StyledHeaderDiv>
    );
};

export default Header;