import React from 'react';

/**
 * JSX 한개의 'element' 만 리턴한다.
 *  여러개 리턴할 경우 하나의 태그로 감싸면 된다.
 * <> ... </> 비어있는 태그 사용 가능 DOM 렌더링 안됨
 */

// 변수 선언은 let, const 로만 해야 함  (var 사용하지 말기!)
// JSX 네 { .. }  인에 유효한 JavaScript 표현식 사용 가능 
//    https://ko.legacy.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx
// JSX 안에선 if 사용 불가.  삼항연산자 가능.


let a = 10;
const b = 20;

const App031 = () => {
    let c = 30;
    console.log(c)
    return ( //괄호 감쌀 경우 return 바로 다음에 시작괄호 붙이기
        <>
            {/* JSX의 주석 */}
            <div>안녕하세요 {a} + {b} = {a + b}</div>
            <div>{a === c ? '같다' : '다르다'}</div>
            <hr/>
            {/* 조건부 렌더링 SCE 사용 */}
            <div>하후돈 {c > 20 && '주공 어찌 목만 돌아왔'}</div>
        </>
        
    );
};

export default App031;