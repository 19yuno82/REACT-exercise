import React from 'react'
import { Link, useParams } from 'react-router-dom'

const About = () => {
  useParams()
  /* useParams
  - url의 파라미터 정보를 가져올 수 있음
  - 하나만 설정 가능하기 때문에, 물품의 고유한 ID값/번호를 설정하는데 적합

  1) <Route path='/url경로:파라미터이름' />
  ex) <Route path='/product/:num'>
  2) 파라미터를 사용할 컴포넌트로 와서
    import ...
    let {파라미터이름} = useParams()
  3) 페이지 이동을 할 때 URL 에 num 자리에 데이터를 입력 
    <Link to="/product/15">

  */

  /* useSearchParams
  - url의 쿼리값을 가져와서 사용(? 이후의 데이터)
  - 여러값을 구분해서 사용하고 싶을 때
  - 예를 들어, 똑같은 상품 페이지만 랭킹을 통해 들어왔는지
    서칭을 통해 들어왔는지, 광고페이지를 통해 들어왔는지 >> 구분
  - 고유번호 이외에도 필요한 데이터가 있다면 사용

  ex) 
  <Link to='/product/1?method=ranking'/>
  <Link to='/product/1?method=list'/>

  - 컴포넌트로 이동
  const [query,setQuery] = useSearchParmas();
  query.get('method') 안에 데이터가 들어있음
   
  */
  
  /** useParams vs useSearchParams
   * useParams 는 하나밖에 사용할 수 없음
   * 즉, 그 컴포넌트가 갖고 있는 고유한 성질을 담는데 유용함
   * ex) 상품고유번호, 회원사번, 학생학번 ..
   * 
   * useSearchParams 는 쿼리에 입력만 할 수 있다면 여러개 사용 가능
   * ex) 인기글, 품절상태, 유료회원배너, 등등...
   */

  return (
    <div>
      <h3>about</h3>
      <Link to='/product/1?method=list'>[1] 캠핑 용품 저랑 거래하실 분?</Link><br />
      <Link to='/product/2'>[2] 정보처리기사 스터디 하실 분?</Link><br />
      <Link to='/product/3'>[3] 크리스마스 같이 보내실 분?</Link><br />
    </div>
  )
}

export default About