import { v4 as uuid } from 'uuid';
import { Contact } from '../_shared/Contact';

export type PhonebookState = { search: string; contacts: Contact[] };

export const phonebookInitialState: PhonebookState = {
    search: '',
    contacts: [],
};

export enum PhonebookActions {
    SET_CONTACTS = 'SET_CONTACTS',
    CREATE_CONTACT = 'CREATE_CONTACT',
    DELETE_CONTACT = 'DELETE_CONTACT',
    SET_SEARCH = 'SET_SEARCH',
}

export type SetContactsAction = {
    type: PhonebookActions.SET_CONTACTS;
    payload: {
        contacts: Contact[];
    };
};

export type CreateContactAction = {
    type: PhonebookActions.CREATE_CONTACT;
    payload: Omit<Contact, 'id'>;
};

export type DeleteContactAction = {
    type: PhonebookActions.DELETE_CONTACT;
    payload: {
        id: string;
    };
};

export type SetSearchAction = {
    type: PhonebookActions.SET_SEARCH;
    payload: {
        search: string;
    };
};

export type PhonebookActionTypes = SetContactsAction | CreateContactAction | DeleteContactAction | SetSearchAction;

export const phonebookReducer = (state: PhonebookState, action: PhonebookActionTypes): PhonebookState => {
    switch (action.type) {
        case PhonebookActions.SET_CONTACTS:
            return {
                ...state,
                contacts: action.payload.contacts,
            };
        case PhonebookActions.CREATE_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, { id: uuid(), name: action.payload.name, number: action.payload.number }],
            };
        case PhonebookActions.DELETE_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts.filter(({ id }) => id !== action.payload.id)],
            };
        case PhonebookActions.SET_SEARCH:
            return {
                ...state,
                search: action.payload.search,
            };
        default:
            return state;
    }
};
