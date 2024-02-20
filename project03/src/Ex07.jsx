import React, {useRef} from 'react'
import './App.css'

const Ex07 = () => {
    /*
    주의사항
    use~ (리액트 훅)를 사용할 때는
    특정 함수 안에 선언문이 들어있으면 안된다
    */

    const divRef = useRef();
    /** 원하는 값으로 사이즈를 변경시켜주는 함수 */
    const changeSize = (size)=>{
        console.log("divRef",divRef.current);
        divRef.current.style.width = `${size}px`;
        divRef.current.style.height = `${size}px`;
    };
    const ckBtn =(e)=>{
        console.log("target",e.target.innerText);
        if(e.target.innerText === "작게"){
            changeSize(100);
        } else if (e.target.innerText === "원본") {
            changeSize(200);
        }else{
            changeSize(300);
        }
    };

  return (
    <div>
        <button onClick={ckBtn}>작게</button>
        <button onClick={ckBtn}>원본</button>
        <button onClick={ckBtn}>크게</button>

        <div className='square' ref={divRef}/>
    </div>
  )
}

export default Ex07