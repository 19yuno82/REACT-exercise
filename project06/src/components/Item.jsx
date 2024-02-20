import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Item = ({ item, index }) => {

const nav = useNavigate();

    return (
        <div className='item-container'
        onClick={()=>{
            // nav(`/detail/${index}`);
            //React-Spring 연동
            let url ='http://localhost:8090/SpringBoot3/playerDetail.do?name='+item.name;
            axios
            .get(url)
            .then((res)=>{
                console.log("res "+res.config.url);
                console.log(res.data);
                nav(`/detail/${item.name}`, {state: res.data }); 
            })
    }}
        >
            <img src={"data:image/;base64,"+item.imgSrc} alt="" />
            <table>
                <tbody>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.position}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Item