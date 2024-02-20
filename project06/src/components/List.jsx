import React, { useEffect } from 'react'
import axios from 'axios'
import Item from './Item'

const List = ({ players, setPlayers }) => {
  
  // useEffect(() => {
  //   axios.get('http://localhost:3000/player.json')
  //     .then(response => {
  //       console.log(response.data);
  //       setPlayers(response.data.list)
  //     })
  // }, [])
  
  console.log(players);

  //React - Spring 연동
  useEffect(()=>{
    console.log("Spring으로 요청");
    let url = 'http://localhost:8090/SpringBoot3/playerList.do'
    axios
    .post(url, {responseType : 'blob'})
    .then((res)=>{
      console.log("list : "+res.config.url);
      setPlayers(res.data)
    })
  },[])

  return (
    <div className='list-container'>
      <h1>KOREA REPUBLIC</h1>
      <div className='list-item'>
        {players.map((item, index) => <Item key={index} item={item} index={index} />)}
      </div>
    </div>
  )
}

export default List