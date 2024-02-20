import React, { useContext } from 'react'
import { colorContext } from '../../context/Ex10ColorContext'

const ColorResult = () => {

    const {selectColor}=useContext(colorContext)

    return (
        <div>
            <div 
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: `${selectColor}`
                }}
            />
        </div>
    )
}

export default ColorResult