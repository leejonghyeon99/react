import React, { useEffect, useState } from 'react';
import Sub, {num1 as 하리, num2} from './Sub';

/**
 * useEffect
 *   https://react.dev/reference/react/useEffect
 *
 *   useEffect(setup, dependencies?)
 *      setup:  콜백함수. The function with your Effect’s logic
 *      dependencies:  의존하는 상태변수(들)
 *   React Hook that lets you synchronize a component with an external system.
 *  
 *  useEffect 의 setup 콜백 실행시점:
 *  1. App() 함수가 최초 실행될때
 *    ('마운트 될때' 라고 함 ) (혹은 그려질때)
 *  2. 상태변수가 변경될때 (=> App()함수가 실행되니까)
 *     dependencies 에 등록되어 있어야 한다
 */



const App071 = () => {

    const [data, setData] = useState(0);
    const [search, setSearch] = useState(0);


    const download = () => {
        // ex ) 데이터 다우로드
        let downloadData = 5;
        setData(downloadData);
    }

    // 1. App() 함수가 최초 실행될 때 (마운트 될 때) 한번만
    useEffect(() => {
        console.log("App071() useEffect CallBack Run");
        download();
    },[search]);
    return (
        <>
            {/* {하리}, {num2}
            <Sub/> */}

            <button onClick={() => {setSearch(data)}}>검색</button>

            <div>데이터 : {data}</div>
            <button onClick={()=>{setData(data + 1)}}>더하기</button>
        </>
    );
};

export default App071;