import React from 'react'

function Ex02MemberBox(props) {
  return (
    <div style={{
        backgroundColor: "skyblue",
        width : 150,
        height : 150,
        textAlign: 'center'
    }}>
        <h3>이름: {props.name}</h3>
        <p>나이: {props.age}</p>
        <p>성별: {props.sex}</p>
    </div>
  )
}

export default Ex02MemberBox