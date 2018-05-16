import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import { reducer as filterReducer } from './filter';
import { reducer as todoReducer } from './todos';

import Perf from 'react-addons-perf';

const win = window;
win.Perf = Perf;

// console.log(require('redux-immutable-state-invariant')());

const reducer = combineReducers({
    filter: filterReducer,
    todos: todoReducer
});

const middlewares = [];
// if(process.env.NODE_ENV !== "production"){
//     middlewares.push(require('redux-immutable-state-invariant')());
// }

const storeEnhancers = compose(
    // applyMiddleware(middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)


console.log(reducer);
const store = createStore(reducer, {}, storeEnhancers);



export default store;