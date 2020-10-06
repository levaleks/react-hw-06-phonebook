import React from 'react';
import { SContactsListItem, SDelete, SName, SNumber } from './ContactsListItem.sc';
import { Contact } from '../../_shared/Contact';

export type ContactsListItemProps = Contact & {
    onContactDelete: (id: string) => void;
};

export const ContactsListItem: React.FC<ContactsListItemProps> = ({ id, name, number, onContactDelete }) => {
    const handleContactDelete = (e): void => {
        onContactDelete(e.currentTarget.getAttribute('data-id'));
    };

    return (
        <SContactsListItem as="li">
            <SName>{name}</SName>
            <SNumber>{number}</SNumber>
            <SDelete data-id={id} onClick={handleContactDelete}>
                Delete
            </SDelete>
        </SContactsListItem>
    );
};
