import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter-actions';
// import { SET_FILTER } from './filter-types';

const initialStore = '';

const filterReducer = createReducer(initialStore, {
  [setFilter]: (_, { payload }) => payload,
});

export default filterReducer;

// const filterReducer = (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case SET_FILTER:
//       return payload;

//     default:
//       return store;
//   }
// };
