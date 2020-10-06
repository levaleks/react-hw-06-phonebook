import React, { useCallback, useContext, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { Box } from '../../_shared/Box';
import { Input } from '../../_shared/Input';
import { PhonebookContext } from '../store/PhonebookContext';
import { PhonebookActions } from '../store/phonebookReducer';

export const ContactsFilter: React.FC = () => {
    const { contacts, dispatch } = useContext(PhonebookContext);
    const [value, setValue] = useState('');

    const debouncedHandler = useCallback(
        debounce(
            (e) => dispatch({ type: PhonebookActions.SET_SEARCH, payload: { search: e.target.value.trim() } }),
            200,
        ),
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
