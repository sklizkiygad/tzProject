import {SET_USER_DATA} from "./authConstants";


let initialState = {
    isAuth: false,
    login:''
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}
