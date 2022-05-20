import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  domainList: [{name: 'Test', savedURLList: ['www.gmail.com']}],
};

export const slice = createSlice({
  name: 'domain',
  initialState: initialState,
  reducers: {
    addURL: (state, action) => [action.payload, ...state],
  },
});

export const {name, reducer, actions} = slice;
