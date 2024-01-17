import React, { useState } from 'react';
import Header from '../../components/Header';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const WritePage = () => {


    const [post, setPost] = useState({
        user:"",
        subject:"",
        content:""
    });

    const [errPost, setErrPost] = useState({
        user:"",
        subject:"",
        content:""
    });

    const navigate = useNavigate();



    const setValue = (e) => {
        setPost({
            ...post,
            [e.target.name] : e.target.value, 
        });
    };


    const subSave = (e) => {
        e.preventDefault();         
        fetch("http://localhost:8080/board/write", {
            method : "POST",
            headers : {
                "Content-Type": "application/json;charset=utf-8",
            },
            body : JSON.stringify(post),
        })
        .then(response => {

            if(response.status === 201){ 
                return response.json();
            }
            if(response.status === 400){
                response.json().then(data => {
                    setErrPost(data);
                    console.log(data);
                })  
            }

            return null;
            
        })
        .then(data => {            
            if(data !== null){
                alert("작성 완료")
                navigate(`/detail/${data.id}`)
            }else {
                alert("작성 실패");
            }
        })

    };


    return (
        <div>
            <Header pageName={"작성"}></Header>  
            <Form onSubmit={subSave}>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>작성자:</Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="작성자를 입력하세요" name="user" onChange={setValue}></Form.Control>
                    {errPost.user !== null ? <span  className="text-danger">{errPost.user}</span> : ''}
                    
                </Form.Group>

                <Form.Group className="mb-3 mt-3">
                    <Form.Label>제목:</Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="제목을 입력하세요" name="subject" onChange={setValue}></Form.Control>
                    {errPost.subject !== null ? <span  className="text-danger">{errPost.subject}</span> : ''}
                </Form.Group>

                <Form.Group className="mb-3 mt-3">
                    <Form.Label for="content">내용:</Form.Label>
                    <textarea className="form-control" rows="5" placeholder="내용을 입력하세요" name="content" onChange={setValue}></textarea>
                </Form.Group>

                <div className="d-flex">
                    <Button variant='none' type="submit" className="btn btn-outline-dark">작성완료</Button>
                    <Link className="btn btn-outline-dark ms-1" to="/list">목록</Link>
                </div>
            </Form>
        </div>
    );
};

export default WritePage;