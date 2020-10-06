import React from 'react';
import { SContactsListPlaceholder } from './ContactsListPlaceholder.sc';

export type ContactsListPlaceholderProps = {
    message: string;
};

export const ContactsListPlaceholder: React.FC<ContactsListPlaceholderProps> = ({ message }) => {
    return <SContactsListPlaceholder as="li">{message}</SContactsListPlaceholder>;
};
