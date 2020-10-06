import React from 'react';
import { PhonebookActionTypes, phonebookInitialState, PhonebookState } from './phonebookReducer';

export const PhonebookContext = React.createContext<
    PhonebookState & { dispatch: React.Dispatch<PhonebookActionTypes> }
>({ ...phonebookInitialState, dispatch: () => 0 });
