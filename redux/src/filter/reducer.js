import { SET_FILTER } from './actionTypes';

const defaultState = "all"

const reducer = (state = defaultState, action = {}) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.filter
        }
        default: {
            return state
        }
    }
}

export default reducer;