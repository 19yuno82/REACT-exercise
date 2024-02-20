import React from 'react'
import { Map,MapMarker } from 'react-kakao-maps-sdk'

const Ex18 = () => {
    /*
    카카오맵 띄우기
    (1) API key 세팅: script 태그 삽입 => index.html
    (2) install : react-kakao-maps-sdk
    (3) import : Map, MapMarker 등 => 사용 컴포넌트
    - Map : 지도 생성
        center => 지도 중심 위치, 위도와 경도로 표시
        style => 지도 크기
        level => 지도 확대 레벨
    - MapMarker : 마커 생성
        position => 마커 위치, 위도와 경도로 표시
    - 위도, 경도 찾기 : 
    */
  return (
    <div>
        <Map 
        center={{lat: 35.14987727182504, lng: 126.91984869656743,}}
        style={{width:'100%',height:'300px'}}
        level={3}>
            <MapMarker position={{lat: 35.14987727182504, lng: 126.91984869656743,}}>
                <div>스마트인재개발원동구점</div>
            </MapMarker>
        </Map>
    </div>
  )
}

export default Ex18