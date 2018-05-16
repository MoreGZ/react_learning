import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleTodo, removeTodo } from '../actions';
import TodoList from './todoList';
import AddTodo from './addTodo';

class Todos extends Component {
    render(){
        return (
            <div className="Todos">
                <AddTodo></AddTodo>
                <TodoList
                    todos={this.props.todos}
                    toggleTodo={this.props.toggleTodo}
                    removeTodo={this.props.removeTodo}
                ></TodoList>
            </div>
        )
    }
}

const selectVisibleTodos = (todos, filter) => {
    switch(filter){
        case 'all' :{
            return todos
        }
        case 'complete' :{
            return todos.filter((item) => {
                return item.complete
            })
        }
        case 'uncomplete' :{
            return todos.filter((item) => {
                return !item.complete
            })
        }
        default:{
            return todos
            // throw("unsupport error")
        }
    }
}

export default connect(
    (state) => ({
        todos: selectVisibleTodos(state.todos, state.filter)
    }),
    (dispatch) => {
        return {
            toggleTodo: function(id){
                dispatch(toggleTodo(id));
            },
            removeTodo: function(id){
                dispatch(removeTodo(id));
            }
        }
    }
)(Todos);