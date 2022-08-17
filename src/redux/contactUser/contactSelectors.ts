import {RootState} from "../store";

export const userContactsSelector = (state:RootState) => {
    return state.contact.userContacts;
}