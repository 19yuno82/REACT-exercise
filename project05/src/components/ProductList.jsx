import React, { useEffect } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'

const ProductList = ({list,setList}) => {

  /*
  (1) public 안 bestList.json 데이터 접근
   => axios, useEffect 이용
  (2) 가지고 온 데이터 list에 세팅
  */
  useEffect(()=>{
    axios.get('http://localhost:3000/bestList.json')
    .then(response => {
      console.log(response);
      setList(response.data.list)
    })

  },[])
  console.log('list',list)
  return (
    <div className='main-container'>
      {list.map((item,index) => <ProductItem key={index} item={item} index={index}/>)}
    </div>
  )
}

export default ProductList