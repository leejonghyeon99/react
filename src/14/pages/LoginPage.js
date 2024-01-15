import React from 'react';
import Login from '../component/login/Login';
import { useParams } from 'react-router-dom';

const LoginPage = () => {
    let params = useParams(); //dynamic segement 경로상의 값들을 받아온다
    console.log(params.id)

    return (
        <>
            <Login/>
        </>
    );
};

export default LoginPage;