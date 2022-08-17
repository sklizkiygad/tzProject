import {IUser} from "../../types/types";
import { DELETE_USER_CONTACT, SET_USERS_CONTACTS } from "./contactConstants";

export interface ContactState {
    userContacts: IUser[];
    
}
let initialState:ContactState = {
    userContacts: []
};

export const contactReducer = (state = initialState, action:any) => {
    console.log(action);
    switch (action.type) {
        case SET_USERS_CONTACTS:
            return {
                ...state,
                userContacts:action.payload
            }
            case DELETE_USER_CONTACT:                
                return {
                    ...state,
                    userContacts: [...state.userContacts.filter(user=>{
                        console.log('dsfsdfsdfsd', user.id, action);
                        
                        return user.id !== action.id
                    })],
                }

        default:
            return state;
    }
}