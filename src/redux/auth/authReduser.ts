import {LOGOUT, SET_USER_DATA} from "./authConstants";
import {Action} from "redux";


interface AuthState {
    isAuth: boolean;
    login: string;
}


interface AuthAction {
    type: typeof SET_USER_DATA | typeof LOGOUT
    payload: AuthState
}


let initialState:AuthState = {
    isAuth: false,
    login:''
};


export const authReducer = (state = initialState, action:AuthAction):AuthState => {
    console.log(action);
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        // case LOGOUT:
        //     return {
        //         ...state,
        //         isAuth: false,
        //     };
        default:
            return state;
    }
}