import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCard from './components/PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';



const Test_flask = () => {
  console.log('Test_flask');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get('http://127.0.0.1:5000/api/data');
          console.log('useEffect', response.data.pokemon)
          setData(response.data.pokemon)
      } catch (error) {
          console.error('Error fetching data:', error)
      }
    };

    fetchData();
  }, []) // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 함


  const pokemonMap = data && data.map((item, index) => <PokemonCard key={index} item={item} />)

  return (

    <div>
      <h1>Test_flask</h1>
      {console.log('return')}
      {/* {JSON.stringify(data, null, 2)} */}
      <div style={{ display: 'flex' }}>
        {pokemonMap}
      </div>
    </div>
  )
}

export default Test_flask