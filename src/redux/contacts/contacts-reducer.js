import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contacts-actions';
// import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

const initialStore = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = createReducer(initialStore, {
  [addContact]: (store, { payload }) => [...store, payload],
  [deleteContact]: (store, { payload }) =>
    store.filter(contact => contact.id !== payload),
});

export default contactsReducer;

// const contactsReducer = (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...store, payload];

//     case DELETE_CONTACT:
//       return store.filter(contact => contact.id !== payload);

//     default:
//       return store;
//   }
// };
