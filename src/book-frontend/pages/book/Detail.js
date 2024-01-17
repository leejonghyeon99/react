import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {

    const navigate = useNavigate();

    let {id} = useParams();

    const [book, setBook] = useState({
        id : "",
        title : "",
        author : "",
    });

    useEffect(() => {
        fetch("http://localhost:8080/book/" + id)
        .then(response => response.json())
        .then(data => setBook(data));
    },[]);

    const deleteBook = () => {
        if(!window.confirm("삭제하시겠습니까?")) return;
        fetch("http://localhost:8080/book/"+id,{
            method : "DELETE",            
        })
        .then(response => response.text())
        .then(data => {
            if(data === "ok"){
                alert("삭제 성공");
                navigate("/"); //삭제 성공 후 '목록' 화면으로
            }else{
                alert("삭제 실패");
            }
        })
    };

    const updateBook = () => {
        navigate("/updateForm/" + id);
    }

    return (
        <div>
            <h1>상세 보기 : {book.id}</h1>
            <Button variant='warning' className='me-2' onClick={updateBook}>수정</Button>            
            <Button variant='danger' onClick={deleteBook}>삭제</Button>
            <hr />
            <h3>author : {book.author}</h3>
            <h3>title : {book.title}</h3>
        </div>
    );
};

export default Detail;