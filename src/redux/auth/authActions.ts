import {LOGOUT, SET_USER_DATA} from "./authConstants";
import axios from "axios";
import {IAuth} from "../../types/types";



import { AnyAction } from 'redux'
import { RootState } from '../store'
import { ThunkAction } from 'redux-thunk'

export const setAuthUserData = (login:string, isAuth:boolean) => ({
    type : SET_USER_DATA, payload:{login, isAuth
    }
});

export const authLogin = (login:string, password:string):ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) =>{

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

export const logout= () => ({ type: LOGOUT});