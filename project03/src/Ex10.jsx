import React, { useState } from 'react'
import ColorList from './components/Ex10/ColorList'
import ColorResult from './components/Ex10/ColorResult'
import { colorContext } from './context/Ex10ColorContext'

const Ex10 = () => {
    /*
    context란 ?
    - 리액트 컴포넌트 간에 값을 전역적으로 공유할 수 있게 해주는 기능
    - 우리에게는 데이터를 주고받는 props 가 있는데 왜 context를 써야 하나
      A. props 로만 데이터를 전달하면 깊숙하게 위치한 컴포넌트에 데이터를 전달하는 경우
         여러번 연달아서 props를 설정하게 됨 => 불편하고 실수가 잦음
         이러한 현상을 props drilling 이라고 부른다
         그래서 우리는 context로 전역적으로 데이터를 관리한다
    [context 만드는 순서]
    1) context 파일을 만들어준다
     - createContext
     - 꼭 export 해주기
    2) context 를 사용할 공간에 import {context} 해주기
    3) context.Provider로 감싸주기
     - Provider 안에 value 라는 속성
     - value 안에 우리가 전달하고자 하는 데이터, 저장하고자 하는 데이터 등등을 넣는다
    */

    const [selectColor,setSelectColor] = useState('gray');
    
    return (
        <colorContext.Provider value={{selectColor,setSelectColor}}>
            <h1>변경할 색상을 고르시오</h1>
            <ColorList/>
            <hr />
            <h1>선택한 색상은</h1>
            <ColorResult />
        </colorContext.Provider>
    )
}

export default Ex10