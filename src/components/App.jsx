import { Provider } from 'react-redux';
// import store from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import PhoneBook from './PhoneBook/PhoneBook';
import { store, persistor } from '../redux/store';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PhoneBook />
        </PersistGate>
      </Provider>
    </>
  );
};

//bundle.js:2728 The object notation for `createReducer` is deprecated,
// and will be removed in RTK 2.0.
// Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer
