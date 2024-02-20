import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = ({ list }) => {
  let { num } = useParams();
  let item = list.find(i => i.no == num);
  console.log(item);
  return (
    <div className='main-container'>
      <div className='product-container detail-container'>
        <div className='detail-image'>
          <img src={item.src} alt="" />
        </div>
        <div className='detail-text'>
          <h4>{item.title}</h4>
          <p>
            <span>{item.price}원</span>
            <span>{item.delivery === "free" ? "무료배송" : item.delivery +'원'}</span>
          </p>
          <Link to='/list'>목록으로 돌아가기</Link>
        </div>
      </div>
    </div>
  )

}

export default ProductDetail