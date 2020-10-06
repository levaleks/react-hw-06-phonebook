import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CreateContact } from './CreateContact';
import { ContactsFilter } from './ContactsFilter';
import { ContactsList } from './ContactsList';
import { SHeading, SPhonebook } from './Phonebook.sc';
import { phonebookReducer, phonebookInitialState, PhonebookActions } from './store/phonebookReducer';
import { PhonebookContext } from './store/PhonebookContext';
import { PhonebookStorage } from './store/PhonebookStorage';

export const Phonebook: React.FC = () => {
    const [{ search, contacts }, dispatch] = useReducer(phonebookReducer, phonebookInitialState);
    const phonebookStorage = useRef(new PhonebookStorage('phonebook-v1'));

    const [isIn, setIsIn] = useState(false);

    useEffect(() => {
        dispatch({
            type: PhonebookActions.SET_CONTACTS,
            payload: { contacts: phonebookStorage.current.getContacts() },
        });

        setIsIn(true);
    }, []);

    useEffect(() => {
        phonebookStorage.current.saveContacts(contacts);
    }, [contacts]);

    const phonebookContext = useMemo(() => ({ search, contacts, dispatch }), [search, contacts, dispatch]);

    return (
        <PhonebookContext.Provider value={phonebookContext}>
            <SPhonebook>
                <CSSTransition in={isIn} timeout={200}>
                    <SHeading>Phonebook</SHeading>
                </CSSTransition>
                <CreateContact />
                <ContactsFilter />
                <ContactsList />
            </SPhonebook>
        </PhonebookContext.Provider>
    );
};
