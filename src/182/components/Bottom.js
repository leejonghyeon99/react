import { useDispatch } from "react-redux";
import { increase, decrease, changeName } from "../store";
import "../CSS/App181.css";
import React from 'react';

const Bottom = () => {
    const dispatch = useDispatch();

    return (
        <div className="sub_container">
            <h4>Bottom</h4>
            <button onClick={() => dispatch(increase())}>증가</button>
            <button onClick={() => dispatch(decrease())}>감소</button>
            <button onClick={() => dispatch(changeName("홍길동"))}>이름 변경</button>
        </div>
    );
};

export default Bottom;