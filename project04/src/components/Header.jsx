import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    /** Link 태그
     * 웹 페이지에서는 원래 링크 이동 시 a태그를 사용함
     * 그러나, a태그 사용 시 페이지를 새로 불러오기 때문에 SPA로서의 장점 X
     * history API 라는 기능을 통해 브라우저 주소 경로만
       바꾸는 기능이 내장되어 있기 때문에 편한 사용자 경험 제공
    
    (1) import {Link} from 'react-router-dom'
    (2) <Link to="url경로">링크의 이름</Link>

    */

    /** useNavigate
     * 페이지 이동을 도와주는 react hooks
     * 사용방법
     * 1. const 변수 = useNavigate()
     * 2. 페이지 이동이 필요할 때 변수("경로")
     * ex) const nav = useNavigate()
     *          nav('/about')
    */
   const nav = useNavigate()
   let auth = false;
  return (
    <div>
        <Link to="/">Main</Link> {" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/product/1?method=header">Product</Link>{" "}
        <button onClick={()=>{
            auth ? nav('/mypage') : nav('/')
            }}>my page</button>
    </div>
  )
}

export default Header