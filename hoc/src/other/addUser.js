import React, { Component } from 'react';

export default class addUser extends Component{
    static defaultProps = {
        user: "this is user"
    }

    static propTypes = {
        children: React.propTypes.func.isRequired    
    }

    render() {
        return this.props.children(this.props.user);
    }
}