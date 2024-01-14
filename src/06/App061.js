import React from 'react';
import { useState } from 'react';
import Sub from './Sub';

const App061 = () => {


// Responding to Events
// https://react.dev/learn/responding-to-events#adding-event-handlers


/**
 *  useState()
 *   React Hook 라이브러리 함수중 하나
 *   component 에 state variable (상태변수) 추가
 *
 *   const [state, setState] = useState(initialState);
 *      
 *      state: 상태값
 *      setState: 상태값을 변경할 함수
 *      initalState : 상태값의 초기값.
 */

    //함수
    // let number = 1; //'상태'값이 아니라서 '변경'이 되어도 렌더링이 안된다.

    const [number, setNumber] = useState(1);

    const add = () => {
        setNumber(number + 1); //setNumber 는 React에게 number 상태값 변경을 요청
                                //상태변경되어야 component 가 return 된다(렌더링)
        console.log("add() called: ", number);
    }
    console.log('App061() Render');
    return (
        <>
            <div>
                <h1>숫자 : {number} </h1>
                <button onClick={add}>더하기</button>
                <Sub/>
            </div>        
        </>
    );
};

export default App061;