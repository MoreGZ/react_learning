import React from 'react';
import TodoItem from './todoItem';

const todoList = ({todos, toggleTodo, removeTodo}) => {
    return (
        <ul className='todoList'>
            {
                todos.map((item) => (
                    <TodoItem
                        key = {item.id}
                        text = {item.text}
                        complete = {item.complete}
                        onToggle = {() => {toggleTodo(item.id)}}
                        onRemove = {() => {removeTodo(item.id)}}
                    />
                ))
            }
        </ul>
    )
}
export default todoList