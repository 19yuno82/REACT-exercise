import React, { useContext } from 'react'
import ListItem from './ListItem'
import { todoContext } from '../../context/Ex12TodoContext';

const List = () => {

    const { todos } = useContext(todoContext)
    console.log('todos',todos);

    let todoList = todos.map(item => <ListItem item={item} key={item.key} />);

    return (
        <div>
            <table>
                <thead></thead>
                <tbody>
                    {todoList}
                </tbody>
            </table>
        </div>
    )
}

export default List