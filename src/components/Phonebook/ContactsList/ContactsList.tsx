import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group';
import { ContactsListItem } from './ContactsListItem';
import { SContactsList, SListWrapper } from './ContactsList.sc';
import { ContactsListPlaceholder } from './ContactsListPlaceholder';
import { deleteContact } from '../store/actions';
import { Contact } from '../_shared/Contact';
import { PhonebookState } from '../store/state';

export const ContactsList: React.FC = () => {
    const contacts = useSelector<PhonebookState, Contact[]>((state) => state.contacts);
    const search = useSelector<PhonebookState, string>((state) => state.search);
    const dispatch = useDispatch();
    const handleContactDelete = useCallback((id) => dispatch(deleteContact(id)), [dispatch]);

    const filteredContacts = useMemo(
        () => contacts.filter(({ name }) => name.toLocaleLowerCase().includes(search.toLocaleLowerCase())),
        [search, contacts],
    );

    const [currentList, setCurrentList] = useState<{ key: string; component: ReactElement }>();

    useEffect(() => {
        if (filteredContacts.length) {
            setCurrentList({
                key: 'list',
                component: (
                    <TransitionGroup component={SContactsList}>
                        {filteredContacts.map(({ id, name, number }) => (
                            <CSSTransition key={id} timeout={200} mountOnEnter unmountOnExit>
                                <ContactsListItem
                                    id={id}
                                    name={name}
                                    number={number}
                                    onContactDelete={handleContactDelete}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                ),
            });
        } else {
            setCurrentList({
                key: 'placeholder',
                component: (
                    <SContactsList>
                        <ContactsListPlaceholder message="Nothing to show" />
                    </SContactsList>
                ),
            });
        }
    }, [filteredContacts, handleContactDelete]);

    return (
        <SwitchTransition>
            <CSSTransition key={currentList?.key ?? 'key'} timeout={200}>
                <SListWrapper>{currentList?.component}</SListWrapper>
            </CSSTransition>
        </SwitchTransition>
    );
};
