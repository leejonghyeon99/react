import React, { useState } from 'react';
import Header from '../components/Header';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SaveAndUpdate from '../components/SaveAndUpdate';




const WritePage = () => {

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

    
    const setSurveyValue = (e) => {
        setSurvey({
            ...survey,
            [e.target.name] : e.target.value, 
        });
        setIsFail(0);
    };


    const valid = () => {
        if (Object.values(survey).slice(1).filter(f => f.trim() === '' || f.trim() === null).length){
            return true;
        }

        if(survey.age < 0) return true;
    
    }

    const surveySubmit = (e) => {
        e.preventDefault();
        if (valid()) {
            setIsFail(1);
            return;
        }
        
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


    return (
        <>
            <Header pageName={"설문작성"}></Header>
            <SaveAndUpdate page="write"></SaveAndUpdate>
        </>
    );
};

export default WritePage;