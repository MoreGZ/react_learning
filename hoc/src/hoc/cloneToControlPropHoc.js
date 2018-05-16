import React, { Component } from 'react';

const cloneToControlPropHoc = (WrapperComponent) => {
    return class hocComponent extends WrapperComponent{
        render(){
            const element = super.render();
            const newProps = {
                ...this.props,
                style:{
                    color:"red",
                    background:"blue"
                }
            }

            return React.cloneElement(element,newProps,element.props.children);
        }
    }
}

export default cloneToControlPropHoc;