import React, { useEffect, useState } from 'react'

const Ex14 = () => {

    /*
        class componet 에서는 시점을 지정할 수 있는
        LifeCycle 이라는게 존재(Ex13.jsx 참조)
        => function component에서는 사용이 불가능

        대체 사용이 가능한 리액트 훅, useEffect를 사용
        1) useEffect(()=>{},[])
        - componentDidMount 를 대체
        - UI 세팅이 완료되어 DOM에 접근 가능
        - API CALL
        *주의사항
        -> 비어있더라도 Array는 꼭 적어줘야 함
        -> useEffect(함수)
            모든 이벤트가 이뤄지는 것에 렌더링
        2) useEffect(()=>{},[state])
        - componentDidUpdate 를 대체
        - array 안에 있는 값이 갱신된 직후에 호출
        - 최초 렌더링 때 한번 호출
        - 변화를 감지할 대상은 복수가 될 수도 있다
    */

    console.log('1. constructor를 대체하는 함수 초기화');

    useEffect(() => {
        console.log('3. 화면 렌더링 끝');
    }, [])

    const [num, setNum] = useState(0);

    const btnCk = () => {
        setNum(num + 1);
    }

    useEffect(() => {
        console.log('4. Update');
    }, [num]);

    return (
        <div>
            {console.log('2. render를 대체하는 return')}
            <h1>Function Counter : {num}</h1>
            <button onClick={btnCk}>+1</button>
        </div>
    )
}

export default Ex14