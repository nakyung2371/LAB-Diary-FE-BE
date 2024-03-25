import React, {useEffect, useState} from 'react';
import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';
import {useNavigate} from "react-router-dom";

function DiaryList({data}) {

    //data: 월별로 필터된 일기 객체가 저장된 배열, 날짜별로 정렬되지 않는 배열 [{일기1}, {일기2}, {일기3}]

    //useNavigate: 함수, 이벤트 특정 요청 -> 라우터 요청에 대한 컴포넌트 출력
    const navigate = useNavigate();

    //Select의 Option의 value, name을 저장하는 배열
    const sortOptionList = [
        {value: "latest", name: "최신순"},
        {value: "oldest", name: "오래된순"},
    ];

    //정렬 타입을 저장하는 state
    const [sortType, setSortType] = useState("latest");

    //정렬 타입에 따라서 객체를 정렬해서 배열에 저장 [{일기1}, {일기2}, {일기3}]
    const [sortData, setSortData] = useState([]);

    //useEffect: sortType에 따라서 sortData를 수정하는 Hook, state의 값이 변경된 이후에 다른 작업을 자동으로 처리
    //  DiaryList 처음 랜더링될 때, 의존성 배열의 값이 수정될 때 [data, sortType]
    useEffect(() => {
        //인풋받은 객체의 날짜를 비교해서 리턴
        const compare = (a, b) => {
            if (sortType === "latest") {   //최신순으로 정렬해서 리턴
                return Number(b.date) - Number(a.date);

            } else {                        //오래된 순으로 정렬해서 리턴
                return Number(a.date) - Number(b.date);
            };
        }

            //compare 함수에 인자로 값을 정렬하기 위해서 원본 일기를 저장하는 배열의 값을 JSON 형식으로 저장 후 => 자바의 객체로 변환
            //JSON.stringify(객체): 객체를 JSON 형식으로 변환하는 메소드    <- 직렬화: RAM -> 네트워크(JSON)
            //JSON.parse(JSON 파일): JSON 파일을 JavaScript 객체로 변환, RAM에서 Object에 정의된 여러 메소드를 사용함
            const copyList = JSON.parse(JSON.stringify(data));

            //copyList에는 정렬된 배열의 객체가 정렬되어서 들어감
            copyList.sort(compare);

            //setSortDate에 copyList: 정렬된 배열을 넣는다
            setSortData(copyList);



    }, [data, sortType]
    );

    const onChangeSortType = (e) => {
        console.log(e.target.value);
        setSortType(e.target.value);
    }


    return (
        <div className="DiaryList">
            {/* select box, 새글쓰기 버튼  */}
            <div className="menu_wrapper">
                <div className="left_col">
                    <select value={sortType} onChange={onChangeSortType}>
                        {
                            sortOptionList.map( (it, idx) => (
                                <option key={idx} value={it.value}> {it.name} </option>
                                )
                            )}
                    </select>
                </div>
                <div className="right_col">
                    <Button text={"새 글쓰기"} type= {"positive"} onClick = {() => {navigate('/new')}  }/>
                </div>
            </div>

            {/*DiaryItem을 처리 블락 */}
            <div className="list_wrapper">
                {
                    sortData.map( (it) => (
                        <DiaryItem key={it.id} {...it} />
                    )    )
                }

            </div>

        </div>
    );
}

export default DiaryList;