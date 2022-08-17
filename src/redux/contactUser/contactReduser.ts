import {IUser} from "../../types/types";

export interface ContactState {
    userContacts:IUser[]|null;
    
}
let initialState:ContactState = {
    userContacts: null
};

export const contactReducer = (state = initialState, action:any) => {
    console.log(action);
    switch (action.type) {

        default:
            return state;
    }
}