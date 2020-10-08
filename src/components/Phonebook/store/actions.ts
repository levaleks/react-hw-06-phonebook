import { Contact } from '../_shared/Contact';

export enum PhonebookActions {
    SET_CONTACTS = 'SET_CONTACTS',
    CREATE_CONTACT = 'CREATE_CONTACT',
    DELETE_CONTACT = 'DELETE_CONTACT',
    SET_SEARCH = 'SET_SEARCH',
}

/**
 * Set contacts
 */

export type SetContactsAction = {
    type: PhonebookActions.SET_CONTACTS;
    payload: {
        contacts: Contact[];
    };
};

export const setContacts = (contacts: Contact[]): SetContactsAction => ({
    type: PhonebookActions.SET_CONTACTS,
    payload: {
        contacts,
    },
});

/**
 * Create contact
 */

export type CreateContactAction = {
    type: PhonebookActions.CREATE_CONTACT;
    payload: Omit<Contact, 'id'>;
};

export const createContact = (contact: Omit<Contact, 'id'>): CreateContactAction => ({
    type: PhonebookActions.CREATE_CONTACT,
    payload: contact,
});

/**
 * Delete contact
 */

export type DeleteContactAction = {
    type: PhonebookActions.DELETE_CONTACT;
    payload: {
        id: string;
    };
};

export const deleteContact = (id: string): DeleteContactAction => ({
    type: PhonebookActions.DELETE_CONTACT,
    payload: {
        id,
    },
});

/**
 * Set search
 */

export type SetSearchAction = {
    type: PhonebookActions.SET_SEARCH;
    payload: {
        search: string;
    };
};

export const setSearch = (search: string): SetSearchAction => ({
    type: PhonebookActions.SET_SEARCH,
    payload: {
        search,
    },
});

/**
 * All types
 */

export type PhonebookActionTypes = SetContactsAction | CreateContactAction | DeleteContactAction | SetSearchAction;
