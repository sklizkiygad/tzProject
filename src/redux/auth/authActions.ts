import {SET_USER_DATA} from "./authConstants";
import {Axios as axios} from "axios";

export const setAuthUserData = (login, isAuth) => ({
    type : SET_USER_DATA, payload:{login, isAuth
    }
});

export const authLogin = (login, password) => async (dispatch) =>{

    const response = await axios.get('http://localhost:3000/profile')

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