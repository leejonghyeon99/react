import React from 'react';
import '../CSS/App181.css'

const Top = (props) => {

    const {number} = props; //비구조화

    return (
        <div className='sub_container'>
        <h4>Top</h4>
        번호: {number}
    </div>
    );
};

export default Top;