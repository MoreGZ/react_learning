import React, { Component } from 'react';

import { connect } from 'react-redux'
import './todo.css';

// const todoItem = ({id, text, complete, onToggle, onRemove}) => {
//     return (
//         <li>
//             <input type="checkbox" checked={complete} onChange={onToggle}/>
//             <span>{text}</span>
//             <span className = {complete ? "tag finished" : "tag unfinished"}></span>
//             <button onClick={onRemove}>删除</button>
//         </li>
//     )
// }

class todoItem extends Component {
    render(){
        const {id, text, complete, onToggle, onRemove} = this.props;
        return (
            <li>
                <input type="checkbox" checked={complete} onChange={onToggle}/>
                <span>{text}</span>
                <span className = {complete ? "tag finished" : "tag unfinished"}></span>
                <button onClick={onRemove}>删除</button>
            </li>
        )
    }
}

export default connect()(todoItem)