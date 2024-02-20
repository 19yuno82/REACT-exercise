import React, { useContext } from 'react'
import { colorContext } from '../../context/Ex10ColorContext'


const ColorList = () => {
    let color = ['red','orange','yellow','green','blue']
    const {setSelectColor} = useContext(colorContext)
    const changeColor=(e)=>{
        setSelectColor(e.target.style.backgroundColor)
    }
  return (
    <div style={{display:'flex'}}>
        {
            color.map(item=>(
                <div 
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: `${item}`
                    }}
                    onClick={changeColor}
                />
            ))
        }
    </div>
  )
}

export default ColorList