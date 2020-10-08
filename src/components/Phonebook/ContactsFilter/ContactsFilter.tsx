import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { Box } from '../../_shared/Box';
import { Input } from '../../_shared/Input';
import { setSearch } from '../store/actions';
import { Contact } from '../_shared/Contact';
import { PhonebookState } from '../store/state';

export const ContactsFilter: React.FC = () => {
    const contacts = useSelector<PhonebookState, Contact[]>((state) => state.contacts);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const debouncedHandler = useCallback(
        debounce((e) => dispatch(setSearch(e.target.value.trim())), 200),
        [debounce],
    );

    const handleChange = useCallback(
        (e) => {
            e.persist();

            setValue(e.target.value.trim());

            debouncedHandler(e);
        },
        [debouncedHandler],
    );

    useEffect(() => {
        if (!contacts.length && value) setValue('');
    }, [contacts, value, setValue]);

    return (
        <Box>
            <Input label="Find contacts by name" value={value} onChange={handleChange} disabled={!contacts.length} />
        </Box>
    );
};
