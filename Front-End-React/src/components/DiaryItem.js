import React from 'react';
import './DiaryItem.css';
import {getEmotionImgById} from '../utils.js';
import Button from './Button';
import {useNavigate} from "react-router-dom";

function DiaryItem({id , emotionId, content, date}) {

    //MPA에서 페이지 이동: <a href = "이동할 페이지.html"> 이동 </a>,
    //      window.location.href ("sub.html"): 함수, 이벤트
    //
    //SPA에서 페이지 이동: <Link to='/home'> 이동 </Link>
    //      라우팅 구성이 되어 있어야 함. /home (요청) -> <Home /> (컴포넌트)
    //      useNavigate: navigate('/home')

    //useNavigate 훅 선언
    const navigate = useNavigate();

    //diary 상세 정보로 이동
    const onDetail = () => {
        navigate(`/diary/${id}`)
    }

    //diary 수정 정보로 이동, useNavigate 훅을 사용해서 이동
    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    return (
        <div className="DiaryItem">
            <div onClick={onDetail} className={['img_section', `img_section_${emotionId}`].join(" ")}>
                <img src = {getEmotionImgById(emotionId)}  alt= {`emotion${emotionId}`} />
            </div>
            <div onClick={onDetail} className="info_section">
                <div className="date_wrapper">
                    {new Date(parseInt(date)).toLocaleDateString()}
                </div>
                <div className="content_wrapper">
                    {content.slice(0,25)}
                </div>
            </div>
            <div className="button_section">
                <Button text={"수정하기"} type={"default"}
                        onClick = {goEdit} />
            </div>

        </div>
    );
}

export default DiaryItem;