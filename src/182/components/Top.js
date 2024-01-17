import { useSelector } from "react-redux";
import "../CSS/App181.css";
import React from 'react';

const Top = () => {

    // useSelector() 를 사용하여 어느 component 에서든지 store 의 state 값들을 사용할수 있게 된다.
    // store 의 state 에 등록되어 있는 number, user 를 꺼내오기
    const {number, user} = useSelector((store) => store);

    return (
        <div className="sub_container">
            <h4>Top</h4>
            번호: {number} <br/>
            이름 : {user.name}<br/>
        </div>
    );
};

export default Top;