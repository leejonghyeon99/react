import React from 'react';
import { styled } from 'styled-components';

// props 받기,
// function 의 매개변수로 기술,
const Home = (props) => {
  // console.log(props);  // 일단 확인!

  // const boards = props.boards;
  // console.log(boards);
  // const id = props.id;
  // console.log(`id: ${id}`);

  const { boards, id, setBoards, number, setNumber } = props; // 비구조화 할당 구문 사용!
  const {userinfo} = props;

  console.log(boards);
  console.log(id);

  // styled component 에 JavaScript 표현식 가능
  const color1 = 'cyan';
  const StyledButton1 = styled.button`
    color: ${'orangered'};
    background-color: ${color1};
    border-style: ${(color1 === 'cyan') ? 'dashed' : 'none'};
    `;

  // styled component props 패싱
  const StyledButton2 = styled.button`
    margin: 0 5px;
                  /* 주의!! .↓  여기서 매개변수 props 는 Home() 함수의 매개변수 props 가 아니라  styled component 에 전달된 props 다! */
    background-color: ${props => props.bgColor};
  `;

  // 부모로부터 받은 데이터로 조건부 스타일링
  const  StyledButton3 = styled.button`
    color: ${props => props.u.username === "허지우" ? 'blue' : 'red'};
  `;

  // styled component 상속
  const StyledButton4 = styled(StyledButton1)`
    background-color: yellow;
  `;

  return (
    <div>
      <h1>홈페이지</h1>
      {/* 자식쪽에서 setBoards() 직접 사용 못함 */}
      <button onClick={()=> setBoards([])}>전체삭제</button>
      <ul>{boards.map(board => <li>제목: {board.title} 내용: {board.content} </li>)}</ul>
      <hr/>
      <h2>number {number}</h2>
      <button onClick={()=>setNumber(number + 1)}>증가</button>

      <hr/>
      <StyledButton1>버튼1</StyledButton1>

      <StyledButton2 bgColor='limegreen'>버튼2</StyledButton2>

      <StyledButton3 u = {userinfo}>버튼3</StyledButton3>

      <StyledButton4>버튼4</StyledButton4>

    </div>
  );
};

export default Home;
