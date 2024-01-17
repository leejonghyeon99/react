import React, { useEffect, useState } from 'react';
import Header from '../../components/Header'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tbody = (p) => {
    const post = p.post;
    return (
        <tr>
            <td><span >{post.id}</span></td>
            <td><span><Link to={`/detail/${post.id}`}>{post.subject}</Link></span> </td>
            <td><span >{post.user}</span></td>
            <td><span >{post.viewCnt}</span></td>
            <td><span >{post.regDate}</span></td>
        </tr>
    );
}

const ListPage = () => {


    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:8080/board/list")
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
                setPosts(data);
            }
        })
    },[]);


    return (
        <>
        <Header pageName={"목록"}></Header>
            <Table>
                <thead className="table-success">
                    <tr>
                        <th>#</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>조회수</th>
                        <th>작성일</th>
                    </tr>                    
                </thead>                
                <tbody>
                    {posts.map(
                        p => 
                            <Tbody post={p} key={p.id}/>
                        )}                
                </tbody>
            </Table> 
            <div class="row">
                <div class="col-12">
                    <Link to="/write" class="btn btn-outline-dark">작성</Link>
                </div>
            </div>
        </>
    );
};

export default ListPage;