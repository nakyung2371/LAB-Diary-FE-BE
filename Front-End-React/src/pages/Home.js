import React, {useContext, useState, useEffect} from 'react';
import Button from '../components/Button';
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import {DiaryStateContext} from "../App";
import {getMonthRangeByDate} from "../utils";


function Home(props) {

    //Context provider에서 내려보내주는 상태값을 불러옴: useContext
    //data <- mockData      [{}, {}, {}]
    //data: 모든 일기를 저장하는 배열
    const data = useContext(DiaryStateContext);

    //console.log ("HOME : " , data);

    //data [{일기1}, {일기2}, {일기3}] 해당 월의
    //state: 월별로 필터링된 일기 배열을 저장
    const [filteredDate, setFilteredDate] = useState([]);

    //현재 년월을 출력하는 useState
    const [pivotDate, setPivotDate] = useState(new Date());

    //useEffect를 사용해서 Home 컴포넌트가 랜더링될 때, [data, pivotDate]가 수정이 될 때 함수 랜더링
    useEffect(
        () => {
            if(data.length >= 1) {

                //현재 년월에 대한 시작일, 종료일을 가지고 옴
                const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);

                //data: 전체 일기에 대한 내용 -> 해당 월의 일기 내용만 필터해서 새로운 배열에 저장
                setFilteredDate(
                    data.filter(
                        (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
                    )
                );
            }
        }, [data, pivotDate]
    );



    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    }

    return (
        <div>
            <Header
                title= {headerTitle}     //getMonth: 0부터 시작돼서 + 1
                leftChild={<Button text={" < "} type={"positive"}
                                   onClick={onDecreaseMonth} />}
                rightChild={<Button text={" > "} type={"negative"}
                                    onClick={onIncreaseMonth} />}
            />
            <DiaryList data={data}/>
            
        </div>
    );
}

export default Home;