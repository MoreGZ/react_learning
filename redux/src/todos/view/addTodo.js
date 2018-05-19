import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions';

class AddTodo extends Component {
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        

        this.state = {
            inputValue: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const input = this.input;
        if(!this.state.inputValue.trim()){
            return 
        }

        this.props.addTodo(this.state.inputValue.trim());

        this.setState({
            inputValue:""
        })
    }

    onChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    render(){
        return (
            <div className="add_todo">
                <form onSubmit = {this.onSubmit}>
                    <input type="text" onChange = {this.onChange} value={this.state.inputValue}/>
                    <button type="submit">添加</button>
                </form>
            </div>
        )
    }
}

export default connect(
    null,
    {
        addTodo
    }
)(AddTodo);