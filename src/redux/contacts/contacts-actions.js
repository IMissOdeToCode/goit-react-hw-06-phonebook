import { createAction } from '@reduxjs/toolkit';

import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';
import { nanoid } from 'nanoid';

export const addContact = createAction(ADD_CONTACT, data => {
  return { payload: { ...data, id: nanoid() } };
});

export const deleteContact = createAction(DELETE_CONTACT);

// export const addContact = payload => {
//   return { type: ADD_CONTACT, payload: { id: nanoid(), ...payload } };
// };

// export const deleteContact = payload => {
//   return { type: DELETE_CONTACT, payload };
// };
