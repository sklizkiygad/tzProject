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
<<<<<<< Updated upstream
export const authLogin = (login:string, password:string) => async (dispatch:Dispatch<any>) => {
=======
<<<<<<< HEAD
export const authLogin = (login:string, password:string):any => async (dispatch:Dispatch<any>) => {
=======
export const authLogin = (login:string, password:string) => async (dispatch:Dispatch<any>) => {
>>>>>>> cfb84fa37c053fc5b17bf1893eedaa8db580c6df
>>>>>>> Stashed changes

    const response = await axios.get<IAuth>('http://localhost:3000/profile');
    try{
        if(response.data.login===login && response.data.password===password){
            dispatch(setAuthUserData(login, true))
        }else{
            alert('Неверный логин или пароль');
            console.log('error');

        }
    }catch{
        alert('Проблемы с сервером');
        console.log('Error');

    }
}

export const logout= ():LogoutAction => ({ type: LOGOUT});