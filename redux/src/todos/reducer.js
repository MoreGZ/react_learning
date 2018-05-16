import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

const defaultState = [
    {
        text:"first todo",
        id: 0,
        complete: false
    },
    {
        text:"second todo",
        id: 1,
        complete: false
    }
]

const reducer = (state = defaultState, action = {}) => {
    // console.log(state);
    switch(action.type){
        case ADD_TODO:{
            return [
                {
                    id: action.id,
                    text: action.text,
                    complete: action.complete
                },
                ...state
            ]
        }
        case TOGGLE_TODO:{
            return state.map((item) => {
                return item.id === action.id ? { text: item.text, id: item.id, complete: !item.complete} : item;
            })
        }
        case REMOVE_TODO:{
            return state.filter( (item) => {
                return item.id !== action.id
            })
        }
        default: {
            return state
        }
    }
}

export default reducer;