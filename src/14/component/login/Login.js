import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';


const Login = () => {
    const StyledLoginDiv = styled.div`
        padding: 30px 0 30px 0;
        background-color: beige;
    `;

    const navigate = useNavigate();

    return (
        <StyledLoginDiv>
            <h1>로그인 페이지</h1>
            {/* <button onClick="history.back()">go back</button> 동작 안함 */}
            <button onClick={()=>{navigate(-1)}}>go back</button>
        </StyledLoginDiv>
    );
};

export default Login;