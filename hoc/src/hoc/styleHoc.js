import React, { Component } from 'react';

const styleHoc = (WrappedComponent, style) => {
    return class hocComponent extends Component{
        render() {
            return (
                <div style={style}>
                    <WrappedComponent></WrappedComponent>
                </div>
                 
            )
        }
    }
}

export default styleHoc;