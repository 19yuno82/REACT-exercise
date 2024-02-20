import React, { useState } from 'react'
import Ex09Item from './components/Ex09Item'

const Ex09 = () => {
    /*
    컴포넌트끼리 값 주고받기
    - Ex09.jsx : 상위 요소(부모)
    - components -> Ex09Item.jsx : 하위 요소(자식)

    1. input에 onChange 이벤트를 걸어준다 => changeData 함수 실행
    2. 이벤트 객체를 받아와서 사용의 입력값을 console에 확인
    3. inputTitle 이라는 state에 해당 입력 값을 세팅
    4. inputTitle 이라는 state 값을 Ex09Item 에게 전달 - props
    5. 입력할 때 마다 어쩌고저쩌고 대신 나의 입력값이 들어가도록
    */
    const [inputTitle,setInputTitle] = useState(null);
    const [childData,setChildData] = useState(null);
    const changeData=(e)=>{
        console.log('이벤트 값',e.target.value)
        setInputTitle(e.target.value)
    }

    const changeDataFromChild=(data)=>{
        console.log('changeDataFromChild called',data)
        setChildData(data)
    };

    return (
    <div>
        <h1>양방향 데이터 통신</h1>
        <h3>상위에서 하위로</h3>
        <input type="text" onChange={changeData}/>
        <Ex09Item title={inputTitle} changeDataFromChild={changeDataFromChild}/>
        <span>하위에서 상위로 넘어온 값은 {childData} 입니다.</span>
    </div>
  )
}

export default Ex09