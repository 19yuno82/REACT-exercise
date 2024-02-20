import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Ex16 = () => {

    const [movieList, setMovieList] = useState([]);
    //화면 렌더링이 마무리 된 직후, 실행됨
    useEffect(()=>{
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20231205`
        
        //API 데이터를 주고받을 수 있는 문법 2가지 : fetch, axios
        /* 
        case 1) fetch API
        - 장점 
            1. js 자체 내장 라이브러리, 별도의 설치 필요 X
            2. 속도가 상대적으로 빠름
        - 단점
            1. 지원이 되지 않는 브라우저가 존재
                => 그러다 보니 react-native(어플)에서 많이 사용
            2. JSON 변환 지원 필요
        */
    //    fetch(url)
    //     .then((response)=>response.json())
    //     .then((response)=>
    //         setMovieList(response.boxOfficeResult.dailyBoxOfficeList))
    //     .then(console.log(movieList))

        /*
        case 2) Axios
        - 장점
            1. fetch 보다 상대적으로 다양한 기능
            2. 다양한 브라우저에서 사용 가능
            3. 상대적으로 보안에 유리
            4. 자동으로 JSON 변환
        - 단점
            1. 별도 라이브러리 설치(npm install axios)
            2. 속도가 상대적으로 느림

        "내 프로젝트는 볼륨도 작고, 설치도 귀찮아" : fetch
        "나는 react-native를 통해 어플을 만들거야" : fetch
        "어느 정도 볼륨이 있는 그 외 모든 웹프로젝트" : axios

        **Axios 문법
        1) 설치 : 터미널에 npm i axios
        2) import axios from 'axios'
        3) url 주소를 통해 데이터를 받아오는 방법
            axios.get(url)
                 .then(성공 시 실행될 함수)
                 .catch(실패 시 실행될 함수)
        4) 나의 서버에 데이터를 보내주는 방법
            axios.post(내서버주소, {내가 보내줄 데이터(객체형식)})
                 .then()
                 .catch()
        
        */
       axios.get(url)
       .then(response=>response.data)
       .then(response=>setMovieList(response.boxOfficeResult.dailyBoxOfficeList))
       .catch(error=>console.log(error))

    },[])
    const movieListMap = movieList.map(item=>
        <tr key={item.rnum}>
            <td>{item.rank}</td>
            <td>{item.movieNm}</td>
            <td>{item.openDt}</td>
        </tr>
    )
  return (
    <div>
        <h1>영화 순위</h1>
        <table>
            <tbody>
                {/* 가져온 영화를 세팅 */}
                {movieListMap}
            </tbody>
        </table>
    </div>
  )
}

export default Ex16