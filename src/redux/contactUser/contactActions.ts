import {DELETE_USER_CONTACT, SET_USERS_CONTACTS} from "./contactConstants";
import {ContactState} from "./contactReduser";
import {IUser} from "../../types/types";
import axios from "axios";
import {Dispatch} from "redux";


interface IUsersContactsActions {
    type: typeof SET_USERS_CONTACTS,
    payload: ContactState
}

interface IDeleteUserContactActions {
    type: typeof DELETE_USER_CONTACT,
    userId: number
}

export const setUsersContacts = (payload:ContactState):IUsersContactsActions => ({
    type: SET_USERS_CONTACTS, payload
});

export const getUsersContacts = ():any => async (dispatch:Dispatch<any>) => {

    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    try{
        console.log(response.data);
        
        dispatch(setUsersContacts({
            userContacts: response.data
        }))
    }catch{
        console.log('Error');

    }

}

export const deleteUserContactById = (userId:number):IDeleteUserContactActions => ({type: DELETE_USER_CONTACT, userId})