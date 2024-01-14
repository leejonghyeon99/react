import React, { createRef, useRef, useState } from 'react';




/**
 * useRef()
 *   https://react.dev/reference/react/useRef
 *   dom 을 변경할때 사용
 *   useRef is a React Hook that lets you reference a value that’s not needed for rendering.
 *
 *   const ref = useRef(initialValue)
 *
 *
 */
const App091 = () => {

    const myRef = useRef(null);
    const [list, setList] = useState([
        {id:1, name:'hello1'},
        {id:2, name:'pangpang'},
    ]);

    //Array.from() 사용
    //  iterable or array like 객체로부터 배열 생성
    const myRefs = Array.from({length: list.length}).map(()=>createRef());
    //Ref의 배열
    return (
        <>
            <div ref={myRef}>Box</div>        
            <button onClick={() => {
                console.log(myRef);
                console.log(myRef.current);
                myRef.current.style.backgroundColor = 'red';
                myRefs[0].current.style.color = 'blue';
            }}>Change Color</button>
            <hr></hr>
            <ul>
                {list.map( (user, index) => <li ref={myRefs[index]}>{user.name}</li>)}
            </ul>
        </>
    );
};




export default App091;