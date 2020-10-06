import React, { ReactElement, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group';
import { ContactsListItem } from './ContactsListItem';
import { SContactsList, SListWrapper } from './ContactsList.sc';
import { ContactsListPlaceholder } from './ContactsListPlaceholder';
import { PhonebookContext } from '../store/PhonebookContext';
import { PhonebookActions } from '../store/phonebookReducer';

export const ContactsList: React.FC = () => {
    const { search, contacts, dispatch } = useContext(PhonebookContext);

    const handleContactDelete = useCallback(
        (id) => dispatch({ type: PhonebookActions.DELETE_CONTACT, payload: { id } }),
        [dispatch],
    );

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
