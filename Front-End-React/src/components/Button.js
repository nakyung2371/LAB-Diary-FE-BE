import React from 'react';
import './Button.css';

//전체 페이지에서 사용하는 버튼 컴포넌트
function Button({text, type, onClick}) {    

    //type: positive, negative, default
    const btnType = ["positive", "negative"].includes(type) ? type : "default";     //type은 props로 들어옴

    //백틱(`): 연결 연산자 없이 문자열 내부에 변수를 출력: '오늘의 날씨는 ${today}습니다.'
    return (
        <button
            className = {["Button", `Button_${btnType}`].join(" ")}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

//컴포넌트의 Props의 값이 없을 때 기본값을 넣도록 함
Button.defaultProps = {
    type: "default"
}
export default Button;