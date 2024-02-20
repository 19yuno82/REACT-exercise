import React from 'react'

const Ex09Item = (props) => {
  return (
    <div>
        상위 컴포넌트에서 입력받은 값은 {props.title} 입니다.
        <hr/>
        <h3>하위에서 상위로</h3>
        <input type="text" onChange={(e)=>{
            console.log(e.target.value);
            props.changeDataFromChild(e.target.value)
        }}/>
    </div>
  )
}

export default Ex09Item