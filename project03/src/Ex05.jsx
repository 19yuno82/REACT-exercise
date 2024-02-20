import React from 'react'

const Ex05 = () => {
    /*
    map 함수
    - 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다
    - 이 때, 기존의 배열은 영향을 받지 않는다
    - map을 이용해서 화면에 렌더링 할 때는 key 값을 꼭 작성
    - 이 때, key값은 고유한 값을 사용해야 하며 인덱스는 추천하지 않는다
        왜? 삭제나 추가에 따라 고유하지 않게 될 수도 있음
        데이터를 생성할 때 고유하게 구분해주는 key를 하나 두는 것이 좋음
    */

    //case1. map함수 사용
    let tr = ['박수현', '양세영', '송찬호'];
    let newTr=tr.map(item => <button key={item}>{item}</button>);
    //console.log(newTr)
    //혼자서 map 함수 사용해보기
    let numList = [1,2,3,4,5];
    //위에 있는 numList를 활용해서 화면 단에 2,4,6,8,10이라는 버튼을 생성해라
    let squareList = numList.map(item=><button key={item}>{item*2}</button>);
    //case2. 배열 안에 객체를 출력해보자
    let students=[
        {name: '정윤오',song:'너희가힙합을아느냐',menu:'나가사키온소바'},
        {name : '김명준', song : '질풍가도', menu : '육류'},
        {name : '박세호', song : '그라데이션', menu : '아메리카노'},
        {name : '노은평', song : 'you are my hidding place', menu :'부대찌개'}
    ]
    let newStudents = students.map(
        (item,idx)=> (
        <p key={item.name}>{idx+1}.{item.name}씨가 좋아하는 노래는 {item.song}이고 음식은 {item.menu}</p>
        )
    )

  return (
    <div>
        <h1>Map함수에 대해 알아보자</h1>
        {newTr} <br/>
        {squareList}<hr/>
        <h3>우리반 취향을 소개합니다</h3>
        {newStudents}
    </div>
  )
}

export default Ex05