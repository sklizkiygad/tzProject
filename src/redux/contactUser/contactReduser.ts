import {IUser} from "../../types/types";
import {ADD_USER_CONTACT, DELETE_USER_CONTACT, SEARCH_CONTACT_USER, SET_USERS_CONTACTS} from "./contactConstants";

export interface ContactState {
    baseUserContacts:IUser[],
    userContacts: IUser[];
}

let initialState:ContactState = {
    baseUserContacts:[],
    userContacts: []
};

export const contactReducer = (state = initialState, action:any) => {
    console.log(action);
    switch (action.type) {
        case SET_USERS_CONTACTS:
            return {
                ...state,
                baseUserContacts:action.payload,
                userContacts:action.payload
            }
            case DELETE_USER_CONTACT:                
                return {
                    ...state,
                    userContacts: [...state.userContacts.filter(user=>{

                        return user.id !== action.id
                    })],
                }

        case ADD_USER_CONTACT:
            return {
                ...state,
                userContacts: [...state.userContacts, action.payload],
            }

        case SEARCH_CONTACT_USER:
            return {
                ...state,
                userContacts: [...state.baseUserContacts.filter(user=>{
                    return user.name.includes(action.query)
                })]

            }

        default:
            return state;
    }
}