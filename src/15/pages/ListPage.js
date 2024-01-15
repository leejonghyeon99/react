import React, { useState } from 'react';
import { styled } from 'styled-components';



const StyledItemBoxDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
  height: 40px;
  margin: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const ListPage = () => {

    //페이지 로딩 최초에 서버로부터 데이터 받아서 그려야한다.
    const [posts, setPosts] = useState([
        {id:1, title:"내용1"},{id:2, title:"내용2"},{id:3, title:"내용3"},
        {id:4, title:"내용4"},{id:5, title:"내용5"},
    
    ]);

    return (
        <div>
            <h4>글 목록 페이지</h4>
            <hr />
            {posts.map(p => 
            <StyledItemBoxDiv>
                <div>
                    번호: {p.id} 제목: {p.title}
                </div>
                <button>삭제</button>
            </StyledItemBoxDiv>
                )}       
        </div>
    );
};

export default ListPage;