import React, { useState } from 'react'

// import picSrc from './style/No.0363.jpg'

function Ex02() {
const picSrc = "http://localhost:3000/style/No.0363.jpg"
/*
React에서 이미지를 가져와보자
1) 이미지 수입해오기
- src 폴더
- import 이미지변수 from 이미지경로
- <img src={이미지변수}/>

2)서버에 이미지 업로드하기
- public 이라는 폴더 <- 이미 서버에 업로드 됨
- 이때 별도로 import 작업 X
- 왜냐하면 public 안에 있는 컨텐츠들은 이미 서버와 통신이 가능한 상태
- url 에 http://localhost:3000/pic/사진이름.확장자 <- 열림

*/

/*
좋아요 기능을 가진 페이지를 제작해보자
- React에서 이미지 경로를 설정하는 방법 2가지
- state를 활용해서 즉각적인 반을 보이는 페이지

step1. 사진, 좋아요 하트, 하트의 개수 화면 세팅
step2. '좋아요' 하트 클릭 시, 하트가 꽉찬 하트로 변경
       '좋아요 1개'라는 문구로 변경
step3. 꽉 찬 하트 클릭 시, 비어있는 하트로 변경
       '좋아요 0개'라는 문구로 변경
변수명 통일!
- 좋아요 숫자 number
- 좋아요 하트 emoji
- 단, 화면에 즉각적인 반응이 필요하다

*/
const [number, setNumber] = useState(0);
const [emoji,setEmoji] = useState('🤍');
/** 좋아요를 설정하는 함수 */
const likeClick=()=>{
    if(number === 0) {
        setNumber(number+1)
        setEmoji('❤')
    } else {
        setEmoji('🤍')
        setNumber(number-1)
    }
    
}
  return (
    <div className='postBox'>
        <img width="300px" src={picSrc} onClick={likeClick}></img>
        <p className='textBox'>
            <span className='likeEmoji' onClick={likeClick}>{emoji}</span>
            <span className="likeNum">
                좋아요 {number}개
                </span>
        </p>
    </div>
  )
}

export default Ex02