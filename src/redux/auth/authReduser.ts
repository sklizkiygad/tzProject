import {LOGOUT, SET_USER_DATA} from "./authConstants";
import {Action} from "redux";
import {IAuth} from "../../types/types";
import {ThunkAction} from "redux-thunk";


export interface AuthState {
    isAuth: boolean;
    login: string;
}


export interface SetUserDataAction {
    type: typeof SET_USER_DATA,
    payload: AuthState
}
export interface LogoutAction {
    type: typeof LOGOUT
}

export type ActionsTypes = SetUserDataAction | LogoutAction

let initialState:AuthState = {
    isAuth: true,
    login:''
};


export const authReducer = (state = initialState, action:ActionsTypes):AuthState => {
    console.log(action);
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
            };
        default:
            return state;
    }
}