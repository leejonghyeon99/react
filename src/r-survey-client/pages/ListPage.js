import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';



const Tbody = (s) => {
    const survey = s.survey;
    const formattedDate = new Date(survey.createdAt).toLocaleString();
    return (
        <tr>
            <td><span >{survey.id}</span></td>
            <td><span><Link to={`/detail/${survey.id}`}>{survey.name}</Link></span></td>
            <td><span >{formattedDate}</span></td>
        </tr>
    );
}

const ListPage = () => {

    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/survey/list")
        .then(response => {
            
            if(response.status === 200){
                return response.json();
            }
            return null;
        })
        .then(data => {
            if (data !== null){
                console.log(data)
                setSurveys(data);
            }
        })
    }, []);


    return (
        <>
        <Header pageName={"설문 목록"}></Header>
            <Table>
                <thead className="table-success">
                    <tr>
                        <th>#</th>
                        <th>이름</th>
                        <th>작성일시</th>
                    </tr>                    
                </thead>                
                <tbody>
                    {surveys.map(
                        s => 
                            <Tbody survey={s} key={s.id}/>
                        )}                
                </tbody>
            </Table>      
            <div className="row">
                <div className="col-12">
                    <Link to="/write" className="btn btn-outline-dark">작성</Link>
                </div>
            </div>
        </>
    );
};

export default ListPage;