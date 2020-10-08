import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '../../_shared/Box';
import { Input } from '../../_shared/Input';
import { Button } from '../../_shared/Button';
import { Notify, useNotify } from '../Notify';
import { PhonebookState } from '../store/state';
import { createContact } from '../store/actions';
import { Contact } from '../_shared/Contact';

export const CreateContact: React.FC = () => {
    const contacts = useSelector<PhonebookState, Contact[]>((state) => state.contacts);
    const dispatch = useDispatch();

    const { isShowing, show } = useNotify();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => setName(e.target.value.trim()), [
        setName,
    ]);

    const handleNumberChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => setNumber(e.target.value.trim()),
        [setNumber],
    );

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            const prettifiedName: string = e.target.name.value.trim().replace(/\s{2,}/g, ' ');
            const trimmedNumber: string = e.target.number.value.trim();

            if (!prettifiedName || !trimmedNumber) return;

            const hasDuplicate = contacts.some(({ name: contactName }) => {
                return prettifiedName.toLowerCase() === contactName.toLowerCase();
            });

            if (hasDuplicate) {
                // eslint-disable-next-line no-alert
                show();

                return;
            }

            dispatch(createContact({ name: prettifiedName, number: trimmedNumber }));

            setName('');
            setNumber('');
        },
        [contacts, show, dispatch],
    );

    return (
        <>
            <Notify isShowing={isShowing}>Contact already exists!</Notify>
            <Box tag="form" autoComplete="off" onSubmit={handleSubmit}>
                <Input label="Name" name="name" value={name} onChange={handleNameChange} />
                <Input label="Number" name="number" value={number} onChange={handleNumberChange} />
                <Button disabled={!name || !number}>Add contact</Button>
            </Box>
        </>
    );
};
