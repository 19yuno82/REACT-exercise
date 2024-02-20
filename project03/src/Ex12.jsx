import React, { useState } from 'react'
import { todoContext } from './context/Ex12TodoContext'
import List from './components/Ex12/List'
import AddItem from './components/Ex12/AddItem'
import './ex12.css'

const Ex12 = () => {

    const [todos,setTodos] = useState([
        {text: "물 마시기",completed: false, key: 1}
    ]);

    //step 1. 할 일 추가하기
    const[newTodo,setNewtodo]=useState("")

    /** 새로운 newTodo 데이터를 todos 배열에 추가하는 함수 */
    const handleNewTodoAddition=()=>{
        console.log("handleNewTodoAddition function", newTodo)
        setTodos([
            ...todos, {text: newTodo,completed: false,key: todos[todos.length-1].key+1}
        ])
        setNewtodo("")
    }
    /** todolist 를 삭제시켜 줄 함수 */
    const handleTodoDelete=(delKey)=>{
        setTodos(todos.filter(item => item.key !== delKey))
    }
    /** 완료한 할 일에 체크 혹은 반대의 경우 체크 해제 toggle 함수 */
    const handleTodotoggle = (ckKey)=>{
        console.log("handleTodotoggle function")
        // find 배열함수
        let targetTodo = todos.find(item => item.key == ckKey)
        console.log('targetTodo',targetTodo)
        if(targetTodo){
            targetTodo.completed = !targetTodo.completed
            setTodos([...todos])
        }
        
    }

    return (
        <todoContext.Provider value={{todos,newTodo,setNewtodo,
        handleNewTodoAddition,handleTodoDelete, handleTodotoggle}}>
            <div className='todo-container'>
                <h1>TODO LIST 🌈</h1>
                <List />
                <AddItem />
            </div>
        </todoContext.Provider>
    )
}

export default Ex12