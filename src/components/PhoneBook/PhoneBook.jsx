import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Notiflix from 'notiflix';

import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import ContactsForm from '../ContactsForm/ContactsForm';

import { addContact, deleteContact } from 'redux/contacts/contacts-actions';
import { setFilter } from 'redux/filter/filter-actions';

import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { getFilter, getFilteredContact } from 'redux/filter/filter-selectors';

import css from './PhoneBook.module.scss';

const PhoneBook = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContact);
  const filter = useSelector(getFilter);
  const allContacts = useSelector(getAllContacts);
  const isContacts = Boolean(contacts.length);

  useEffect(() => {
    const write = JSON.stringify(contacts);
    window.localStorage.setItem('my-contacts', write);
  }, [contacts]);

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const q = allContacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(q);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name)) {
      Notiflix.Notify.failure('name already exists');
      return false;
    }

    const action = addContact({ name, number });
    dispatch(action);

    return true;
  };

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={css.wrapper}>
      <div className={css.block}>
        <h1 className={css.header}>Phonebook</h1>
        <ContactsForm onSubmit={handleAddContact} />
      </div>

      <div className={css.block}>
        <h2 className={css.header}>Contacts</h2>
        <ContactsFilter value={filter} handleChange={handleFilter} />

        {isContacts && (
          <ContactsList
            contacts={contacts}
            removeContact={handleDeleteContact}
          />
        )}
        {!isContacts && <p className={css.header}>No contacts in list</p>}
      </div>
    </div>
  );
};

export default PhoneBook;
