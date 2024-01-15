import {Button} from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>홈페이지</h1>
            <button onClick={() => {navigate("/login/20")}}>/login/20</button>
            <button onClick={() => {navigate("/login/30")}}>/login/30</button>
            <hr />
            <Button>Primary</Button>
            <Button variant='danger'>Danger</Button>
        </div>
    );
};

export default Home;