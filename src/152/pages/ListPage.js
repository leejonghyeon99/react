import React, { useState } from 'react';
import { styled } from 'styled-components';

const StyleItemBoxDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
  height: 40px;
  margin: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListPage = () => {
  // ※ 페이지 로딩 최초에 서버로부터 데이터 받아서 그려야 한다
  const [posts, setPosts] = useState([
    { id: 1, title: '내용1', content: '내용1' },
    { id: 2, title: '내용2', content: '내용2' },
    { id: 3, title: '내용3', content: '내용3' },
    { id: 4, title: '내용4', content: '내용4' },
    { id: 5, title: '내용5', content: '내용5' },
  ]);

  //form의 상태
  const [post, setPost] = useState({id:"",title:"",content:""});

  const handleWrite = (e) => {
    e.preventDefault(); // form 의 onSubmit 에서 동작시킬경우, 기본액션을 중지시켜야  한다
    //id, title, content을 가져와야 함.
     //useRef 를 사용해도 되나... input에 넣으면 불편함
     //<input>에 '상태'를 주어 사용하는 것이다.
    post.id ? handleUpdate() : alert("아이디 없다")
     

  };

   //삭제
   const handleDelete = (e) => {
    setPosts(posts.filter(p => p.id !== e))
   }

  //수정
  const handleUpdate = () => {
    posts.filter(p => p.id == post.id).length ? alert('중복ID') : setPosts([...posts, post]);
  }

  // onXXX() 콜백함수(event handler)의 매개변수는 event객체다.
  const handleChangeId = (e) => {
    console.log(`id값 변경: ${e.target.value}`)
    setPost({...post, id: e.target.value});
  };

  const handleChangeTitle = (e) => {
    console.log(`Title값 변경: ${e.target.value}`)
    setPost({...post, title: e.target.value});
  };


  const handleChangeContent = (e) => {
    console.log(`Content값 변경: ${e.target.value}`)
    setPost({...post, content: e.target.value});
  };

//   input이 여러개이면 똑같으 함수 여러개 만들어야 하나? 맘에 안듦
// => computed property name

  const handleForm = (e) => {
    console.log(e.target.name, e.target.value);
    setPost({...post, [e.target.name] : e.target.value});
    console.log(post);
  };
  
 
  return (
    <>
      <h4>글목록 페이지</h4>
      <form onSubmit={handleWrite}>
        id: <input type="number" placeholder="id 입력..." 
        value={post.id} onChange={handleForm} name='id'/>
        <br />
        제목: <input type="text" placeholder="제목을 입력하세요..." 
        value={post.title} onChange={handleForm} name='title'/>
        <br />
        내용: <input type="text" placeholder="내용을 입력하세요..." 
        value={post.content} onChange={handleForm} name='content'/>
        <br />
        <button type="submit"
        //  onClick={handleWrite}
         >
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyleItemBoxDiv>
          <div>
            번호: {post.id} 제목: {post.title} 내용: {post.content}
          </div>
          <button onClick={() => {handleDelete(post.id)}}>삭제</button>
        </StyleItemBoxDiv>
      ))}
    </>
  );
};

export default ListPage;
