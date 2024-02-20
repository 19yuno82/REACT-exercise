import React from 'react'
import Ex06Box from './components/Ex06Box'
import "bootstrap/dist/css/bootstrap.min.css"
import data from './json/ex06.json'

/*
step1 ex06.json 파일을 수입해온다
step2 가져온 json에서 배열을 찾는다
step3 map함수를 이용해서 아이유, 수지, 나연의 데이터를 
      component에 전달한다(props)
step4 Ex06.jsx에서 받은 데이터를 따라 카드를 생성
step5 완성 시, 단톡에 기능 완성 누르기
*/
/*
filter 함수
- 배열의 요소에 대해서 주어진 함수의 결과 값이 
  true인 요소들을 모아서 반환하는 함수

  Q.내가 map함수와 filter함수를 어떻게 활용해야 할까?
  1) 나는 배열로 데이터를 가지고 있고, 이 배열에 있는 내용들로 컴퍼넌트 구성 : map 함수
  2) 위와 같지만 특정 조건을 한번 더 걸어주고 싶다 : filter + map 함수
  
  에러 예시
  1. map is not a function , filter is not a function
  - 앞에 데이터가 배열이 아닌 경우
  2. ~ is not a function
  - key.map(), key.filter()로 사용하는 것
*/

const Ex06 = () => {

  console.log(data)
  let dataList = data.result;
  console.log(dataList)
  // let dataMap = dataList.map((item)=>(<Ex06Box key={item.num} 
  //     title={item.title} birth={(2023-item.birthYear)+"살"}
  //     contents={item.content} pic={item.imgSrc} sns={item.SNS}/>))
  let dataMap = dataList.map((item) => (<Ex06Box item={item} key={item.num} />))
  let filterMap = dataList.filter(item => item.birthYear <= 1994)
  console.log('filter', filterMap)

  return (
    <div>
      <h1>최종 실습</h1>
      <div style={{ display: 'flex' }}>
        {dataMap}
      </div>
      <h1>필터 함수 사용</h1>
      <h3>1994년생과 나이가 같거나, 많은 사람만 출력하시오</h3>
      <div style={{ display: 'flex' }}>
        {filterMap.map((item) => (<Ex06Box item={item} key={item.num} />))}
      </div>
    </div>
  )
}

export default Ex06