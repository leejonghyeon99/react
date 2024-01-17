import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { Button } from 'react-bootstrap';


const DetailPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();



    useEffect(() => {
        fetch("http://localhost:8080/board/detail/"+id)
        .then(response => {            
            if(response.status === 200){                
                return response.json();
            }
            else {
                return null;
            }
        })
        .then(data => {
            if(data !== null){      
                console.log(data)          
                setPost(data);
            }
        })
    },[]);

    const deletePost = () => {
        fetch("http://localhost:8080/board/delete/"+id,{
            method : "DELETE"
        })
        .then(response => {            
            if(response.status === 200){                
                return response.json();
            }
            else {
                return null;
            }
        })
        .then(data => {
            if(data > 0){      
                navigate("/list");
            }
        })
    }

    return (
        <div>
            <Header pageName={"상세"} subject={post.subject}></Header>
            <div className="mb-3 mt-2 clearfix">
                <span className="float-start me-2">id: {post.id}</span>
                <span className="float-end ms-4">작성일: {post.regDate}</span>
                <span className="float-end">조회수: {post.viewCnt}</span>                  
            </div>

            <div className="mb-3">
                <label>작성자:</label>
                <span className='form-control'>{post.user}</span>
            </div>
            <div className="mb-3 mt-3">
                <label>제목:</label>
                <span className="form-control">{post.subject}</span>
            </div>
            <div className="mb-3 mt-3">
                <label>내용:</label>
                <div className="border bg-light rounded p-2">{post.content}</div>
            </div>

            <div className="d-flex">
                <Link className="btn btn-outline-dark"  to={`/update/${post.id}`}>수정</Link>
                <Link className="btn btn-outline-dark ms-2" to="/list">목록</Link>
                <Button variant='none' type="button" className="btn btn-outline-danger ms-2" onClick={deletePost}>삭제</Button>
                <Link className="btn btn-outline-dark ms-2" to="/write">작성</Link>
            </div>
            
        </div>
    );
};

export default DetailPage;