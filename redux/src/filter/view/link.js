import React from 'react';
import { connect } from 'react-redux'
import { setFilter } from '../actions'

const link = ({ children, active, onClick,filter }) => {
    const activeTag = (
        <b className="filter select">{children}</b>
    )

    const unActiveTag = (
        <a href="#" className="filter unselect" onClick = {(e) => {
            e.preventDefault();
            onClick(filter);
        }}>{children}</a>
    )

    return active ? activeTag : unActiveTag
}

export default connect(
    (state, ownProps) => ({
        active: state.filter === ownProps.filter
    }),
    (dispatch) => {
        return {
            onClick: (filter) => {
                dispatch(setFilter(filter))
            }
        }
    }
)(link)