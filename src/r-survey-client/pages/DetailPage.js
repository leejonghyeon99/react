import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';


/**
 * 
 *  <div class="container mt-3">
 

    <!-- 하단 링크 -->
    <div class="d-flex my-3">
      <a class="btn btn-outline-dark" href="#">수정</a>
      <a class="btn btn-outline-dark ms-2" href="#">목록</a>
      <button type="button" class="btn btn-outline-danger ms-2">삭제</button>
      <a class="btn btn-outline-dark ms-2" href="#">작성</a>
    </div>
    <!-- 하단 링크 -->
  </div>
 * 
 */


const DetailPage = () => {

    const [survey, setSurvey] = useState({
        id : "",
        name : "",
        age : "",
        gender : "",
        area : "",
        favorite : "",
        createdAt : ""
    });

    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("http://localhost:8080/survey/detail/"+id)
        .then(response => {
            
            if(response.status === 200){
                return response.json();
            }
            return null;
        })
        .then(data => {
            if (data !== null){
                console.log(data)
                setSurvey(data);
            }
        })
    }, []);
    
    const deleteSurvey = () => {
        if(!window.confirm("정말 삭제 하시겠습니까?")) return;
        fetch("http://localhost:8080/survey/delete/"+id, {
            method : "DELETE",
        })
        .then(response => {
            if(response.status === 200){
                return response.json();
            }else{
                return null;
            }
        })
        .then(data => {
            if(data !== null){
                window.confirm("삭제 되었습니다.")
                navigate("/list");                
            }
        })
    }

    return (
        <>
            <Header pageName={"설문 상세조회"}></Header>
            <div className="alert alert-light d-flex justify-content-between" role="alert">
                <span>{survey.id}</span>
                <span>{survey.createdAt}</span>
            </div>
            <section>
                <div className="mt-3">
                    <h5>이름</h5>
                    <span className="form-control" readOnly>{survey.name}</span>
                </div>

                <div className="mt-3">
                    <h5>나이</h5>
                    <span className="form-control" readOnly>{survey.age}</span>
                </div>

                <div className="mt-3">
                    <h5>성별</h5>
                    <span className="form-control" readOnly>{survey.gender}</span>
                </div>

                <div className="mt-3">
                    <h5>거주지역</h5>
                    <span className="form-control" readOnly>{survey.area}</span>
                </div>

                <div className="mt-3">
                    <label>
                    <h5>이상형</h5>
                    </label>
                    <span className="form-control" readOnly>{survey.favorite}</span>
                </div>
                </section>

                <div className="d-flex my-3">
                    <Link to={"/update/"+id} className="btn btn-outline-dark" >수정</Link>
                    <Link to="/list" className="btn btn-outline-dark ms-2">목록</Link>
                    <Button onClick={deleteSurvey} variant='none' type="submit" className="btn btn-outline-danger ms-2">삭제</Button>
                    <Link to="/write" className="btn btn-outline-dark ms-2">작성</Link>
                </div>
        </>
    );
};

export default DetailPage;