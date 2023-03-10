export const getAllContacts = store => store.contacts;

export const getFilteredContact = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });
  return result;
};

export const getFilter = ({ filter }) => filter;
