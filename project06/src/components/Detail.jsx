import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const Detail = () => {

  // let {num} = useParams();
  const location = useLocation();
  const player = location.state;
  console.log(player);

  return (
    <div className='item-container'>
     <img src={"data:image/;base64,"+player.imgSrc} alt="" />
      <table>
        <tbody>
        <tr>
          <td>이름</td>
          <td>{player.name}</td>
          
        </tr>
        <tr>
          <td>생년</td>
          <td>{player.age}</td>
        </tr>
        <tr>
          <td>포지션</td>
          <td>{player.position}</td>
        </tr>
        <tr>
          
          <td>키</td>
          <td>{player.height}</td>
        </tr>
        <tr>
          
          <td>몸무게</td>
          <td>{player.weight}</td>
        </tr>
        <tr>
          
          <td>소속</td>
          <td>{player.team}</td>
        </tr>
        </tbody>
      </table>
      <Link to='/' style={{color: 'white', fontSize: '1rem'}}>메인으로</Link>
      <Link to='/list' style={{color: 'white', fontSize: '1rem'}}>선수목록</Link>
    </div>
  )
}

export default Detail