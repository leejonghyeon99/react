import React from 'react';
import Header from '../components/Header';
import SaveAndUpdate from '../components/SaveAndUpdate';

const UpdatePage = () => {
    return (
        <>
            <Header pageName={"설문 수정"}></Header>
           <SaveAndUpdate page={"update"}></SaveAndUpdate>
        </>
    );
};

export default UpdatePage;