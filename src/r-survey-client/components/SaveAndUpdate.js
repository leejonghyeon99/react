import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';




const CheckBox = ({ name, data, func }) => {
    const isChecked = data.includes(name);
  
    const checkboxChange = () => {
      func((prevData) => {
        if (isChecked) {
          // 이미 선택된 경우 제거
          return prevData.filter((value) => value !== name);
        } else {
          // 선택되지 않은 경우 추가
          return [...prevData, name];
        }
      });
    };
  
    return (
      <div className="form-check">
        <Form.Check
          type="checkbox"
          id={name}
          label={name}
          checked={isChecked}
          onChange={checkboxChange}
        />
      </div>
    );
  };


const SaveAndUpdate = (props) => {

    const {page} = props;
    console.log(page)
    const navgate = useNavigate();
    
    const [survey, setSurvey] = useState({
        id : "",
        name : "",
        age : "",
        gender : "",
        area : "",
        favorite : ""
    });

    const [isFail, setIsFail] = useState(0);
    const {id} = useParams();
    

    const [selectedFavorites, setSelectedFavorites] = useState([]);

    const favoriteChange = (selecBox) => {
        setSelectedFavorites(selecBox);
    };

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

    
    const setSurveyValue = (e) => {


        setSurvey({
            ...survey,
            [e.target.name] : e.target.value, 
        });
        
        
        setIsFail(0);
    };



    const valid = () => {
        
        if (Object.values(survey).slice(1).filter(f => f === '' || f === null).length){
            return true;
        }

        if(survey.age < 0) return true;
    
    }

    const surveySubmit = (e) => {
        
        setSurvey({
            ...survey, favorite : selectedFavorites.join(",")
        })
        e.preventDefault();
       
        
       if(page === 'update'){
        if (valid()) {
            setIsFail(1);
            return;
        }
        console.log("update")
            fetch("http://localhost:8080/survey/update",{
                method : "PUT",
                headers : {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body : JSON.stringify(survey),
            })
            .then(response => {
                if(response.status === 200){
                    return response.json();
                }
            })
            .then(data => {
                if(data !== null){
                    navgate("/detail/"+data.id);
                }
            })
       }
       else{
        if (valid()) {
            setIsFail(1);
            return;
        }
        console.log("write")
        fetch("http://localhost:8080/survey/write",{
            method : "POST",
            headers : {
                "Content-Type": "application/json;charset=utf-8",
            },
            body : JSON.stringify(survey),
        })
        .then(response => {
            if(response.status === 201){
                return response.json();
            }
        })
        .then(data => {
            if(data !== null){
                navgate("/detail/"+data.id);
            }
        })
       }
    }


    return (
        <>        
            <Form onSubmit={surveySubmit}>
            <div className="mt-3">
                <Form.Label><h5>이름 {page === 'write' ? <small>(필수)</small> : ''}</h5></Form.Label>
                <Form.Control type="text" className="form-control" placeholder="이름를 입력하세요" name="name"  onChange={setSurveyValue} value={survey.name} readOnly={page === 'update'}/>
            </div>
            {isFail && survey.name === '' ? <div><span className="text-danger">이름은 필수입니다</span></div> : ''}

            <div className="mt-3">
                <Form.Label ><h5>나이</h5></Form.Label>
                <Form.Control type="number" className="form-control"  placeholder="나이을 입력하세요" name="age" min="0"  onChange={setSurveyValue} value={survey.age} readOnly={page === 'update'}/>
            </div>
            {isFail && survey.age === '' ? <div><span className="text-danger">나이는 0이상의 값이어야 합니다</span></div> : ''}

            <div className="mt-3">
                <Form.Label><h5>성별</h5></Form.Label>
                <div className="form-check">
                    <Form.Label className="form-check-label">남자</Form.Label>
                    <Form.Control className="form-check-input" type="radio" name="gender" value="MALE" onChange={setSurveyValue} checked={survey.gender==="MALE"}/>                
                </div>
                <div className="form-check">
                    <Form.Label className="form-check-label">여자</Form.Label>
                    <Form.Control className="form-check-input" type="radio" name="gender" value="FEMALE" onChange={setSurveyValue} checked={survey.gender==="FEMALE"}/>                
                </div>
            </div>
            {isFail && survey.gender === '' ? <div><span className="text-danger">성별을 선택해주세요</span></div> : ''}
            

            <div className="mt-3">
                <Form.Label ><h5>거주지역 <small>(택1)</small></h5></Form.Label>
                <Form.Select className="form-select" name="area" onChange={setSurveyValue} >
                    <option>-- 거주지역을 선택해 주세요 --</option>
                    <option value="서울" selected={survey.area==="서울"}>서울</option>
                    <option value="경기도" selected={survey.area==="경기도"}>경기도</option>
                    <option value="기타" selected={survey.area==="기타"}>기타</option>
                </Form.Select>
            </div>
            {isFail && survey.area === '' ? <div><span className="text-danger">거주지역을 선택해주세요</span></div> : ''}


            <div className="mt-3">
                <Form.Label>
                    <h5>이상형 <small>(1개이상 선택)</small></h5>
                </Form.Label>
                {["송민호", "이승원", "서현기"].map((e) => (
                    <CheckBox key={e} name={e} data={selectedFavorites} func={favoriteChange}/>
                ))}

            </div>
            {isFail && survey.favorite === '' ? <div><span className="text-danger">한명이상은 반드시 골라야 합니다</span></div> : ''}            

            <div className="my-3">
                <Button variant='none' type="submit" className="btn btn-outline-dark mx-1">{page === 'update' ? '수정완료' : '작성완료'}</Button>
                
                <Link to="/list" className="btn btn-outline-dark">목록</Link>
            </div>

            </Form>   
        </>
    );
};

export default SaveAndUpdate;