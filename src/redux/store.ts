import { applyMiddleware, combineReducers, compose } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from "./auth/authReduser";



let reducers = combineReducers({
    auth: authReducer,
})


const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store
