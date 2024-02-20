import React, { useContext } from 'react'
import { todoContext } from '../../context/Ex12TodoContext'

const ListItem = ({item}) => {

    const {handleTodoDelete, handleTodotoggle}=useContext(todoContext)

    return (
        <>
            <tr>
                <td><input type="checkbox" 
                checked={item.completed}
                onChange={()=>{handleTodotoggle(item.key)}}
                /></td>
                <td>
                    <label style={{textDecoration : item.completed ? "line-through": "none"}}>
                        <span className='todo-text'>
                            {item.text}
                        </span>
                    </label>
                </td>
                <td><button onClick={()=>{handleTodoDelete(item.key)}}>Delete</button></td>
            </tr>
        </>
    )
}

export default ListItem