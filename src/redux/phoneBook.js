import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const initialState = {
//   filter: '',
//   items: [],
// };

export const phoneBook = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    delItem: (state, action) => {
      state.items = state.items.filter(it => it.id !== action.payload);
    },
  },
});
const persistConfig = {
  key: 'react-06-phonebook',
  storage,
};

export const persistedPhoneBookReduser = persistReducer(
  persistConfig,
  phoneBook.reducer
);
