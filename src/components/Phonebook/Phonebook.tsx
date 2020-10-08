import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { CreateContact } from './CreateContact';
import { ContactsFilter } from './ContactsFilter';
import { ContactsList } from './ContactsList';
import { SHeading, SPhonebook } from './Phonebook.sc';
import { phonebookStorage } from './_shared/PhonebookStorage';
import { PhonebookState } from './store/state';
import { Contact } from './_shared/Contact';

export const Phonebook: React.FC = () => {
    const contacts = useSelector<PhonebookState, Contact[]>((state) => state.contacts);

    const [isIn, setIsIn] = useState(false);

    useEffect(() => {
        setIsIn(true);
    }, []);

    useEffect(() => {
        phonebookStorage.saveContacts(contacts);
    }, [contacts]);

    return (
        <SPhonebook>
            <CSSTransition in={isIn} timeout={200}>
                <SHeading>Phonebook</SHeading>
            </CSSTransition>
            <CreateContact />
            <ContactsFilter />
            <ContactsList />
        </SPhonebook>
    );
};
