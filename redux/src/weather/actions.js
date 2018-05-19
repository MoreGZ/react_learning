import * as actionTypes from './actionTypes';
import axios from 'axios';


export const fetchData = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_START
    })
}