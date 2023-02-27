import { createAction } from '@reduxjs/toolkit';

import { SET_FILTER } from './filter-types';

export const setFilter = createAction(SET_FILTER);

// export const setFilter = payload => {
//   return { type: SET_FILTER, payload };
// };
