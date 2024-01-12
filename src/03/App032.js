import React from 'react';
import './App032.css';

/**
 * 리액트에서 스타일링 하기
 * 방법1: 내부에 적는 방법 (가능은 하나 비추)
 * 방법2: 외부 파일에 작성
 * 방법3: 라이브러리 사용 (ex: 부트스트랩, component-styled)
 */

const App032 = () => {
    const mystyle = {
        color : "red",
    };

    return (
        <>
            <div style={mystyle}>Hello</div>        
            <div style={{color:"blue"}}>Hello2</div>        
            <hr/>
            {/* className <- JSX 에서 class 지정구문 */}
            <div className="box-style">외부 css 파일 적용</div>
        </>
    );
};

export default App032;