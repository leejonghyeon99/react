import React from 'react';
import './App101.css';

//정적
const a = {
    color : 'yellow',
    backgroundColor : 'red',
}

const App101 = () => {

    return (
        <>
            <div style={a}>안녕</div>
            <div className='box-style'>안녕</div>
        </>
    );
};

export default App101;