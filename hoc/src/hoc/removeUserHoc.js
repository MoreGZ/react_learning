import React, { Component } from 'react';

const removeUserHoc = (WrappedComponent) => {
    return class hocComponent extends WrappedComponent{
        render() {
            const { user, ...otherProps } = this.props;
            this.props = otherProps;
            return super.render()
        }
    }
}

export default removeUserHoc