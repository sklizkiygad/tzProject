import {DELETE_USER_CONTACT, SET_USERS_CONTACTS} from "./contactConstants";
import {ContactState} from "./contactReduser";
import {IUser} from "../../types/types";
import axios from "axios";
import {AnyAction, Dispatch} from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";


interface IUsersContactsActions {
    type: typeof SET_USERS_CONTACTS,
    payload: IUser[]
}

interface IDeleteUserContactActions {
    type: typeof DELETE_USER_CONTACT,
    id: number
}

export const setUsersContacts = (payload:IUser[]):IUsersContactsActions => ({
    type: SET_USERS_CONTACTS, payload
});

export const getUsersContacts = ():ThunkAction<Promise<void>, RootState, unknown,AnyAction> => async (dispatch) => {

    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    try{
        console.log(response.data);
        
        dispatch(setUsersContacts(response.data))
    }catch{
        console.log('Error');

    }

}

export const deleteUserContactById = (id:number):IDeleteUserContactActions => ({type: DELETE_USER_CONTACT, id})