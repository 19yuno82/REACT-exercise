import React, { useContext } from 'react'
import { todoContext } from '../../context/Ex12TodoContext'

const AddItem = () => {

    const {newTodo,setNewtodo,handleNewTodoAddition} = useContext(todoContext)

  return (
    <div>
        <input type="text" value={newTodo} onChange={(e)=>{setNewtodo(e.target.value)}}/>
        <button onClick={handleNewTodoAddition}>Add</button>
    </div>
  )
}

export default AddItem