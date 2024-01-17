import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = () => {


    const navigate = useNavigate();

    let {id} = useParams();

    //사용자 입력값도 '상태'로 다루기 (서버로 넘기기 편-안)
    const [book, setBook] = useState({
        //초기값 세팅
        id: "",
        title: "",
        author: ""
    });

    useEffect(() => {
        fetch("http://localhost:8080/book/" + id)
        .then(response => response.json())
        .then(data => setBook(data));
    },[]);

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
            method : "PUT",
            headers : {
                "Content-Type": "application/json;charset=utf-8",
            },
            body : JSON.stringify(book),
        })
        .then(response => {
            console.log('response',response);
            if(response.status === 200){ //200
                return response.json();
            } else {
                return null;
            }
            
        })
        .then(data => {
            if(data !== null){
                console.log(`책 수정완료`, data);
                // navigate("/"); HOME으로 이동
                navigate(`/book/${data.id}`)
            }else {
                alert("수정 실패");
            }
        })
    };



    return (
        <div>
            <h1>책 수정하기 | Id :{book.id}</h1>
            <Form onSubmit={submitBook}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name="title" value={book.title} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter Author" onChange={changeValue} name="author" value={book.author}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </div>
    );
};

export default UpdateForm;