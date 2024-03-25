import emotion1 from './img/emotion1.png'
import emotion2 from './img/emotion2.png'
import emotion3 from './img/emotion3.png'
import emotion4 from './img/emotion4.png'
import emotion5 from './img/emotion5.png'

/* 컴포넌트가 아니고 자주 사용하는 함수 정의 - 소문자로 시작
    - 정의해 놓은 외부에서 사용하려면 export가 되어 있어야함
    - export는 하나의 js 파일에 여러 개의 함수에서 설정
        import {함수} from '컴포넌트 경로'

    - export default는 하나만 설정
        import 함수 from '컴포넌트'
*/

//Image id값을 받아서 해당 image를 리턴하는 함수를 생성
//리액트에서 이미지를 사용하려면 해당 image를 import하여 사용
export const getEmotionImgById = (emotionId) => {
    //emotionId가 Number, String 있으므로 String 변환해서 담아서 처리
    const targetEmotionID = String(emotionId);

    switch (targetEmotionID) {
        case "1" :
            return emotion1;
        case "2" :
            return emotion2;
        case "3" :
            return emotion3;
        case "4" :
            return emotion4;
        case "5" :
            return emotion5;
        default :
            return null;
    }

}

//배열을 외부에서 가져와서 사용할 수 있도록 export
export const emotionList = [
    {
        id: 1,
        name: "완전 좋음",
        img: getEmotionImgById(1),
    },
    {
        id: 2,
        name: "좋음",
        img: getEmotionImgById(2),
    },
    {
        id: 3,
        name: "보통",
        img: getEmotionImgById(3),
    },
    {
        id: 4,
        name: "나쁨",
        img: getEmotionImgById(4),
    },
    {
        id: 5,
        name: "완전 나쁨",
        img: getEmotionImgById(5),
    },

]

//날짜를 인풋 받아서 yyyy-mm-dd 형식으로 리턴 돌려주는 함수
export const getFormattedDate = (targetDate) => {
    //연도만 추출(yyyy)
    let year = targetDate.getFullYear();

    //월만 추출: 3 -> 03,  (2+1) 0월 -> +1
    let month = targetDate.getMonth() + 1;

    //일만 추출
    let day = targetDate.getDate();

    //month값이 10 이하일 경우 0을 붙여서 처리
    if (month < 10) {
        month = `0${month}`;
    }

    //day값이 10 이하일 경우 0을 붙여서 처리
    if (day < 10) {
        day = `0${day}`;
    }

    return `${year}-${month}-${day}`;

}

//함수: 해당 날짜를 TimeStamp 형식으로 인풋 받아서 해당 월의 시작일, 마지막일을 리턴
export const getMonthRangeByDate = (date) => {

    //년 월의 시작 날짜
    const beginTimeStamp = new Date(
        date.getFullYear(),     //yyyy
        date.getMonth(),        //mm
        1,                 //1일
        0,                //0시
        0,              //0분
        0               //0초
    );

    //년 월의 마지막 날짜
    const endTimeStamp = new Date(
        date.getFullYear() ,                  //년도
        date.getMonth() + 1,        //다음달 월
        0,                               //0일
        23,                             //23시
        59,                            //59분
        59                             //59초

    );

    return {beginTimeStamp, endTimeStamp};
}