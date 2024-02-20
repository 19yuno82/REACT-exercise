import React from 'react'

function Ex01MenuBox({menu,price}) {
    /*
    상위 컴포넌트에서 보낸 값을 받는 방법
    함수 형태이기 때문에 값은 매개변수로 받아옴
    (case1)props -> props.menu
    (case2){menu} -> menu
    */
    /*
    객체 비구조화 할당
    const person = {name:'yuno',age:20}
    -> person.name //yuno
    const {name,age} = {name:'yuno',age:20}
    -> name //yuno
    */
//   console.log(props);
    return (
    <div>
        <div>
            <h3>{menu}</h3>
            <p>{price}원</p>
        </div>
    </div>
  )
}

export default Ex01MenuBox