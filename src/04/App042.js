import React from 'react';

const App042 = () => {

    let list = [1,2,3] //상태 데이터

    return (
        <>
            <div>{list.map( () => (<li>z</li>))}</div> 
            <hr/>
            <ul>{list.map( (n) => (<li>{n}</li>))}</ul>
            <hr/>
            <p>{list.map( (n) => n)}</p>
        </>
    );
};

export default App042;