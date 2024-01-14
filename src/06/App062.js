import React, {useState} from 'react';


let sample = [
    {id:1, name:"허지우"},
    {id:2, name:"송민호"},
    {id:3, name:"이승원"},
    {id:4, name:"서현기"},
];
const App062 = () => {

    

    // 다운로드 받은 user 데이터(들)을 '상태'로 관리
    const [users, setUsers] = useState(sample);
    const [num, setNum] = useState(5);


    const download = () => {
        // 다운 받은 샘플 데이터가 아래와 같다면.
        // let sample = [
        //     {id:1, name:"허지우"},
        //     {id:2, name:"송민호"},
        //     {id:3, name:"이승원"},
        //     {id:4, name:"서현기"},
        // ];
        // setUsers([...sample]); //깊은 복사 발생, 다른 레퍼런스(주소)의 객체

        //기조데이터에 추가
        // sample.push({id:5, name:'강동키'}); //push는 mutable 함수
        // console.log('donwload()', sample);
        // setUsers(sample);

        //불변함수 사용
        // const a = sample.concat({id:5, name:'유상곤'});
        // console.log('donwload()', sample);
        // setUsers(a);

        //concat 대신에 spread 사용
        // setUsers([...sample, {id:5, name:'김창희'}]);
        const user= {id:num, name:'김창희'+num*3};
        setUsers([...users, user]);
        setNum(num+1);
        console.log(user)

    };
    
    return (
        <>
            <button onClick={download}>Download</button>    
            <ul>{users.map( u => <li>{u.id}, {u.name}</li>)}</ul>
        </>
    );
};

export default App062;