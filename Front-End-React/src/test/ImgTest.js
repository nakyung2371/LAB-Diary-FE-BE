import React from 'react';
import emotion1 from '../img/emotion1.png';
import emotion2 from '../img/emotion2.png';
import emotion3 from '../img/emotion3.png';
import emotion4 from '../img/emotion4.png';
import emotion5 from '../img/emotion5.png';


function ImgTest(props) {
    return (
        <div>
            <h1>이미지 테스트</h1>
            <div><img src={emotion1} alt="이모션 이미지" /></div>
            <div><img src={emotion2} alt="이모션 이미지" /></div>
            <div><img src={emotion3} alt="이모션 이미지" /></div>
            <div><img src={emotion4} alt="이모션 이미지" /></div>
            <div><img src={emotion5} alt="이모션 이미지" /></div>
        </div>
    );
}

export default ImgTest;