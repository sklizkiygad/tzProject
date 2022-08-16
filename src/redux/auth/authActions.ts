import {LOGOUT, SET_USER_DATA} from "./authConstants";
import axios from "axios";
import {IAuth} from "../../types/types";
import {Action, AnyAction, Dispatch} from 'redux'
import { RootState } from '../store'
import { ThunkAction } from 'redux-thunk'
import {ActionsTypes, LogoutAction, SetUserDataAction} from "./authReduser";

export const setAuthUserData = (login:string, isAuth:boolean):SetUserDataAction => ({
    type : SET_USER_DATA, payload:{login, isAuth}
});
//:ThunkAction<Promise<void>, RootState, unknown, ActionsTypes>
export const authLogin = (login:string, password:string) => async (dispatch:Dispatch<any>) => {

    const response = await axios.get<IAuth>('http://localhost:3000/profile');
    try{
        if(response.data.login===login && response.data.password===password){
            dispatch(setAuthUserData(login, true))
        }else{
            console.log('error');

        }
    }catch{
        console.log('Error');

    }
}

export const logout= ():LogoutAction => ({ type: LOGOUT});