import { v4 as uuid } from 'uuid';
import { PhonebookActions, PhonebookActionTypes } from './actions';
import { PhonebookState } from './state';

export const phonebookReducer = (
    state: PhonebookState = {
        search: '',
        contacts: [],
    },
    action: PhonebookActionTypes,
): PhonebookState => {
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
