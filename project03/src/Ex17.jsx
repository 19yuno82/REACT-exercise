import React, { useEffect, useState } from 'react'
import './ex17.css'

const Ex17 = () => {
    console.log(1);
    let cityList = ['gwangju', 'seoul', 'busan'];

    const [city, setCity] = useState('gwangju');
    const [icon, setIcon] = useState('');
    const [temp, setTemp] = useState(0);
    const [cloud, setCloud] = useState('');

    /*
    문제 풀 때 참고사항
    1. icon은 단톡에 있는 주소를 통해서 사용
    2. 해당 API는 캘빈온도 사용
       (캘빈온도 - 273 = 섭씨온도)
    3. 만약 구름의 양이 90보다 크다면 "매우 흐림"
       60보다 크다면 흐림
       30보다 크다면 약간 흐림
       그 외에는 맑음
    
    ** 문제풀이 step
    1) 도시를 나타내는 city를 state로 정의, 초기값 알아서
    2) 첫 화면이 렌더링 되었을 때, getData함수 호출
    3) getData라는 함수를 정의
        open api 값 가져오기
        각각의 값을 정의 - state
        - 아이콘(icon)
        - 온도(temp)
        - 도시이름 (city)
        - 맑음상태 (cloud)
    */

    //===영표샘 풀이 코드==========================================================================
    /** 내가 클릭한 도시를 가져오는 함수 */
    // const getCity = (e) => {
    //     setCity(e.target.innerText)
    // }


    // /** 날씨 데이터를 가져오는 함수 */
    // const getData = () => {
    //     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d98ae2c3057b1f588501393dc077fc5f`;
    //     axios.get(url)
    //         .then(response => response.data)
    //         .then(response => {
    //             setTemp(Math.floor(response.main.temp - 273))
    //             setIcon(`https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`)
    //             if (response.clouds.all > 90) { setCloud("매우 흐림") }
    //             else if (response.clouds.all > 60) { setCloud("흐림") }
    //             else if (response.clouds.all > 30) { setCloud("약간 흐림") }
    //             else { setCloud("맑음") }

    //         })
    // }

    // useEffect(() => {
    //     getData()
    // }, [city])

    let iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const getCity = () => { }

    const getData = (res) => {
        console.log(3);
        setTemp(Math.floor(res.main.temp - 273))
        setIcon(res.weather[0].icon)
        if (res.clouds.all > 90) {
            setCloud("매우 흐림")
        } else if (res.clouds.all > 60) {
            setCloud("흐림")
        } else if (res.clouds.all > 30) {
            setCloud("약간 흐림")
        } else {
            setCloud("맑음")
        }
    }

    const btnCk = (e) => {
        setCity(e.target.innerText)
    }

    useEffect(() => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2bbf0412526780017cadbbb44a935f0`;
        console.log(url);
        fetch(url)
            .then(console.log(2))
            .then(response => response.json())
            .then(response => getData(response))
            .catch(error => console.log(error))
    }, [city])


    return (

        <div className='weather-container'>
            {console.log(4)}
            <div className='weather-item'>
                <h1>오늘의 날씨</h1>
                <div className='weather-data'>
                    <img src={iconSrc} alt="" width="100px" />
                    <h1>{temp}°C</h1>
                    <h3>{city}</h3>
                    <h4>{cloud}</h4>
                </div>
                <div>
                    {cityList.map(item => <button onClick={btnCk}>{item}</button>)}
                </div>
            </div>
        </div>
    )
}

export default Ex17