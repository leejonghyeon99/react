import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SaveForm = () => {

    const navigate = useNavigate();

    //사용자 입력값도 '상태'로 다루기 (서버로 넘기기 편-안)
    const [book, setBook] = useState({
        //초기값 세팅
        title: "",
        author: ""
    });

    const changeValue = (e) => {
        setBook({
            ...book,
            [e.target.name] : e.target.value, //computed
        });
    };

    const submitBook = (e) => {
        e.preventDefault(); //기본 submit 동작 차단
        
        //POTS request
        fetch("http://localhost:8080/book", {
            method : "POST",
            headers : {
                "Content-Type": "application/json;charset=utf-8",
            },
            body : JSON.stringify(book),
        })
        .then(response => {
            console.log('response',response);
            if(response.status === 201){ //201 CREATED 인 경우 성공
                return response.json();
            } else {
                return null;
            }
            
        })
        .then(data => {
            if(data !== null){
                console.log(`책 생성완료`, data);
                // navigate("/"); HOME으로 이동
                navigate(`/book/${data.id}`)
            }else {
                alert("등록 실패");
            }
        })
    };

    return (
        <div>
            <h1>책 등록</h1>
            <Form onSubmit={submitBook}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter Author" onChange={changeValue} name="author" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </div>
    );
};

export default SaveForm;