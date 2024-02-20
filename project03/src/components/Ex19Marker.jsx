import React from 'react'
import { useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

const Ex19Marker = ({ item }) => {
    //마커를 화면에 보여줄 건지 결정하는 state 생성
    const [isVisible, setIsVisible] = useState(false);
    /*
    마우스 올렸을 때 => onMouseover / isVisible : true
    마우스 내렸을 때 => onMouseOut / isVisible : false
    */
    return (
        <>
            <MapMarker
                onMouseOver={() => { setIsVisible(!isVisible) }}
                onMouseOut={() => { setIsVisible(!isVisible) }}
                position={item.latlng}
                image={{
                    src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                    size: {
                        width: 24,
                        height: 35
                    },
                }}>
                {isVisible && <span>{item.title}</span>}
            </MapMarker>
        </>
    )
}

export default Ex19Marker