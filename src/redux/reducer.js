import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './constants';

const initialStore = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const reducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const newContacts = [...store.contacts, payload];
      return { ...store, contacts: newContacts };

    case DELETE_CONTACT:
      const remainedContacts = store.contacts.filter(
        contact => contact.id !== payload
      );
      return { ...store, contacts: remainedContacts };

    case SET_FILTER:
      return { ...store, filter: payload };

    default:
      return store;
  }
};

export default reducer;
