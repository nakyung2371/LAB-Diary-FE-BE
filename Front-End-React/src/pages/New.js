import React, {useContext} from 'react';
import Header from "../components/Header";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";
import {DiaryDispatchContext} from "../App";
import Editor from "../components/Editor";


function New(props) {
    //useNavigate
    const navigate = useNavigate();

    //Context의 Provider에 onCreate를 연결: useContext
    const {onCreate} = useContext(DiaryDispatchContext);

    const onSubmit = (data)  => {
        console.log("글쓰기 호출됨")
        //구조 분해 할당: ES6(2015)에서 적용, 객체의 필드의 값을 새로운 변수에 할당
        const {date, content, emotionId} = data;

        onCreate(date, content, emotionId);
        //완료되면 해당 페이지로 이동 - replace: 뒤로가기 방지
        navigate('/', {replace: true});
    }

    return (
        <div>
            <Header title={"새 일기 쓰기"}
                leftChild={<Button text={"< 뒤로가기"}
                                   type={"positive"} onClick={() => {navigate(-1)}} />}
            />
            <Editor onSubmit = {onSubmit} />
        </div>
    );
}

export default New;