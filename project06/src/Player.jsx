import React, { useState } from 'react'
import './player.css'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import List from './components/List'
import Detail from './components/Detail'

const Player = () => {
    /*
    컴포넌트 생성 및 라우팅 설정
    - 메인페이지 : Main.jsx >> '/'
    - 리스트페이지 : List.jsx >> '/list'
    - 상세페이지 : Detail.jsx >> '/detail'
    */
    const [players,setPlayers] = useState([]);
  return (
    
    <div>
        
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/list' element={<List players={players} setPlayers={setPlayers}/>} />
            <Route path='/detail/:name' element={<Detail/>} />
        </Routes>
    </div>
    
  )
}

export default Player