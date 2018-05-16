import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

let nextId = 2;

export const addTodo = (text) => ({
    type: ADD_TODO,
    text: text,
    complete: false,
    id: nextId++
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id,
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})