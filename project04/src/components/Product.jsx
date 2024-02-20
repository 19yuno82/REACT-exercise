import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Product = () => {
  //useParams
  let {num} = useParams();
  console.log('num',num);

  //useSearchParams
  const [query,setQuery] = useSearchParams();
  console.log('query',query.get('method'));

  return (
    <div>Product {num}
    <br />
    {query.get('method')==="header" && <span>About으로 가시면 글 목록이 있습니다.</span> }
    </div>
  )
}

export default Product