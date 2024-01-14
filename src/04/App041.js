import React from 'react';
import Beta from './Beta';

const App041 = () => {
    // return (
    //     <>
    //      <div>A</div>   
    //      <div>C</div>   
    //     </>
    // );
    console.log("App041() Render")
    return (
        <>
         <div>App041</div>   
         <Beta/>
        </>
    );

    //'부모'를 다시 그리게 되면 '자식'도 다시 그려지게 된다.
    //'자식'을 다시 렌더링 할지 말지를 판단하기 위한 연사을 react가 수행함
    // 판다을 위한 여산을 최적하기 위해 '깊은(얕은) 복사' 필요 ex)...spread
};

export default App041;