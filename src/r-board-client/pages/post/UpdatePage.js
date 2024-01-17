import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const UpdatePage = () => {


    const {id} = useParams();
    const [post, setPost] = useState({
        id:"",
        subject:"",
        content:""
    });

    const [errPost, setErrPost] = useState({
        user:"",
        subject:"",
        content:""
    });
    const navigate = useNavigate();



    useEffect(() => {
        fetch("http://localhost:8080/board/detail/"+id)
        .then(response => {            
            if(response.status === 200){ 
                return response.json();
            }          
            return null;
        })
        .then(data => {
            if(data !== null){      
                console.log(data)          
                setPost(data);
            }
        })
    },[]);

    const setValue = (e) => {
        setPost({
            ...post,
            [e.target.name] : e.target.value, 
        });
    };

    const subUpdate = (e) => {
        e.preventDefault(); 
        
        
        fetch("http://localhost:8080/board/update", {
            method : "PUT",
            headers : {
                "Content-Type": "application/json;charset=utf-8",
            },
            body : JSON.stringify(post),
        })
        .then(response => {
            console.log('response',response);
            if(response.status === 200){ 
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
                navigate(`/detail/${data.id}`)
            }else {
                alert("수정 실패");
            }
        })
    };


    return (
        <div>
            <Header pageName={"수정"} subject={post.subject}></Header>  
            <Form onSubmit={subUpdate}>
                <Form.Group className="mb-3">
                    <Form.Label>작성자:</Form.Label>
                    <span className="form-control">{post.user}</span>
                </Form.Group>

                <Form.Group className="mb-3 mt-3">
                    <Form.Label>제목:</Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="제목을 입력하세요" name="subject"  value={post.subject} onChange={setValue}></Form.Control>
                    {errPost.subject !== null ? <span  className="text-danger">{errPost.subject}</span> : ''}
                </Form.Group>

                <Form.Group className="mb-3 mt-3">
                    <Form.Label for="content">내용:</Form.Label>
                    <textarea className="form-control" rows="5" placeholder="내용을 입력하세요" name="content" value={post.content} onChange={setValue}></textarea>
                </Form.Group>

                <div className="d-flex">
                    <Button variant='none' type="submit" className="btn btn-outline-dark">수정완료</Button>
                    <Button variant='none' type="Button" className="btn btn-outline-dark ms-1" onClick={() => {navigate(-1)}}>이전으로</Button>
                    <Link className="btn btn-outline-dark ms-1" to="/list">목록</Link>
                </div>
            </Form>
        </div>
    );
};

export default UpdatePage;