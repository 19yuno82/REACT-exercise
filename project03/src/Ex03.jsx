import React, { useState } from 'react'

const Ex03 = () => {
    /*
    1. 랜덤한 수를 뽑아준다. (1~3) - ranNum
    2. 사용자가 누른 수를 인지 - inputNum
    3. 만약 난수와 내가 누른 숫자가 같다면 "정답입니다."
       다르다면 땡을 출력하기
    
    ** 힌트
    1. 버튼을 누르는 함수는 하나다
    2. 이벤트 타겟 객체
    3. 난수 뽑는 메소드 : Math.random()
    
    ** 조건있음
    - 
    */
   const [inputNum, setInputNum] = useState(0);
   const [ranNum, setRanNum] = useState(0);
    const btnCk = (e) => {
        console.log("click", e.target.innerText)
        setInputNum(e.target.innerText)
        setRanNum(parseInt(Math.random()*3)+1)
    }

  return (
    <div>
        <h1>랜덤게임</h1>
        <p>원하는 숫자를 하나 클릭해주세요</p>
        <button onClick={btnCk}>1</button>
        <button onClick={btnCk}>2</button>
        <button onClick={btnCk}>3</button>
        {/*{여기서 조건문 작성하기! 삼항 연산자로}*/}
        <p>내가 누른 숫자 : {inputNum}</p>
        <p>컴퓨터가 선택한 숫자 : {ranNum}</p>
        {inputNum == ranNum ? <p>정답입니다!</p> : <p>땡</p>}
        {/* <p>정답입니다!</p> */}
    </div>
  )
}

export default Ex03