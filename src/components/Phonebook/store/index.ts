import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { phonebookStorage } from '../_shared/PhonebookStorage';
import { phonebookReducer } from './reducer';
import { PhonebookActionTypes } from './actions';
import { PhonebookState } from './state';

export const phonebookStore: Store<PhonebookState, PhonebookActionTypes> = createStore(
    phonebookReducer,
    { search: '', contacts: phonebookStorage.getContacts() },
    composeWithDevTools(),
);
