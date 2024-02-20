import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductItem = ({item,index}) => {
  console.log('test',item,index);
  /*
  해당 아이템 div을 클릭했을 때,
  아이템에 대한 상세페이지(ProductDetail)로 이동
  =>useNavigate 사용
  =>상품별 고유번호 index 사용 : /detail/1, /detail/2
  */
 const nav = useNavigate();
  return (
    <div className='product-container' onClick={()=>{
      nav(`/detail/${item.no}`)
      console.log(item.no);}}>
      <img src={item.src} alt="" />
      <p>{item.title}</p>
      <p>{item.price}원</p>
    </div>
  )
}

export default ProductItem