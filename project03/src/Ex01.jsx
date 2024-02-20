import React from 'react'
import { useState } from 'react';

function Ex01() {
    //일반 변수 값
    let letCnt = 0;
    /*
    state
    - 컴포넌트 내부에서 바뀔 수 있는 값
    - 일반 변수와 차이점? 값이 변할 때 

    const[state, setState] = useState(초기값);
    state -> 변수 이름
    setState -> 변수 세팅 시 사용할 함수
    useState -> 초기값 설정
    
    배열 비구조화 할당
    state -> useState()[0]
    setState -> useState()[1]

    Q. const로 선언하였는데 state 값을 어떻게 업데이트하는걸까?
    A. const array = ['A','B','C'];
       array[0]='D';
       const object = {name :'A',age : 20};
       object.name='B';
    */
    //state 값
    const [stateCnt,setStateCnt] = useState(0);
    /*
    React Event

    JS- onclick="func()"
    React- onClick={func}
    ** func()으로 작성하면, 렌더링 시 무조건 호출
    */
    const plusCnt = ()=>{
        console.log('click');
        letCnt = letCnt+1;
        console.log(letCnt);

        //state 값
        setStateCnt(stateCnt+1)
    }
  return (
    <div>
        <p>일반 변수 값 : {letCnt}</p>
        <p>state 값 : {stateCnt}</p>
        <button onClick={plusCnt}>+1</button>
    </div>
  )
}

export default Ex01