import {SET_USERS_CONTACTS} from "./contactConstants";
import {ContactState} from "./contactReduser";
import {IUser} from "../../types/types";
import axios from "axios";
import {Dispatch} from "redux";

interface UsersContactsActions {
    type: typeof SET_USERS_CONTACTS,
    payload: ContactState
}

export const setUsersContacts = (userId:number, phone:string, name:string):UsersContactsActions => ({
    type: SET_USERS_CONTACTS, payload : {userId, phone, name}
});

export const getUsersContacts = ():any => async (dispatch:Dispatch<any>) => {

    const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users');
    try{
        dispatch(setUsersContacts(response.data.userId, response.data.phone, response.data.name))
    }catch{
        console.log('Error');

    }

}