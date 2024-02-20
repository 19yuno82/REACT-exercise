import React from 'react'
import {Link} from 'react-router-dom'


const Main = () => {
  //player List 클릭 시 /list 로 이동
  return (
    <div className='main-container'>Main
      <img src="https://img.kfa.or.kr/main_banner/168127501971331.jpg" alt="" width='100%'/>
     <Link to='/list'>player List</Link>
    </div>
  )
}

export default Main