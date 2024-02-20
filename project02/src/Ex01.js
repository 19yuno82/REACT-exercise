import React from 'react'
import Ex01MenuBox from './components/Ex01MenuBox'

const Ex01 = () => {
    /*
    컴포넌트 구조 꺼내는 단축키 : rafce + Enter
    (react arrow function component export)
    */
   /*
   component
   - 리액트로 만들어진 어플리케이션을 이루는 최소 단위
   - 코드를 묶어서 태그화(사용자 정의 태그)
   - 앞글자 대문자로 생성 => 기존 HTML 태그와 구분
   - export(내보내기) -> import(불러오기)
   */
  /*
  Props(Properties)
  - 상위 컴포넌트에서 하위 컴포넌트로 값을 전달할 때 사용
  - 상위 컴포넌트에서 하위 컴포넌트로 값 보내는 방법
  <component prop1="val1" prop2="val2" prop3="val3" ...../>
  */

  const specialMenu="쌍화차";
  const specialPrice="1000000";

  return (
    <div>
        <Ex01MenuBox menu="아메리카노" price="200000"/>
        <Ex01MenuBox menu="콜드브루" price="400000"/>
        <Ex01MenuBox menu="페퍼민트티" price="350000"/>
        <Ex01MenuBox menu={specialMenu} price={specialPrice}/>
    </div>
  )
}

export default Ex01