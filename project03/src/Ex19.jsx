import React from 'react'
import { Map } from 'react-kakao-maps-sdk'
import Ex19Marker from './components/Ex19Marker';
import { useState } from 'react';

const Ex19 = () => {
  /*
  (1) 카카오 위치 지도 띄우기(Ex18)
  (2) 마커 여러개 띄우기
  */

  const position = [
    {
      title: "카카오",
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
    {
      title: "생태연못",
      latlng: { lat: 33.450936, lng: 126.569477 },
    },
    {
      title: "텃밭",
      latlng: { lat: 33.450879, lng: 126.56994 },
    },
    {
      title: "근린공원",
      latlng: { lat: 33.451393, lng: 126.570738 },
    },
    {
      title: "동구점",
      latlng : {lat: 35.149896, lng: 126.9197772}
    },
    {
      title : "남구점",
      latlng : {lat: 35.110479, lng: 126.877456}
    }
  ];
  //지도 중심 위치를 나타내는 state 생성
  const [center, setCenter] = useState({lat: 33.450701, lng: 126.570667});
  //지도 확대 레벨를 나타내는 state 생성
  const [level, setLevel] = useState(3);

  const smhrdMarker = () => {
    // 지도의 중심 위치 이동
    setCenter(position[4].latlng)
    setLevel(8)
  }


  return (
    <div>
      <Map center={center}
        style={{
          width: '100%',
          height: '450px'
        }}
        level={level}>
        {position.map((item, index) => <Ex19Marker key={index} item={item} />)}
      </Map>
      <button onClick={smhrdMarker}>스마트인재개발원</button>
    </div>
  )
}

export default Ex19