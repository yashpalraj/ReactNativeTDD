import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  domainList: [],
};

export const slice = createSlice({
  name: 'domain',
  initialState,
  reducers: {
    addDomain(state, action) {
      state.domainList = [
        ...state.domainList,
        {name: action.payload, savedURLList: []},
      ];
    },
    addURL(state, action) {
      const updatedArray = state.domainList.map(element => {
        if (element.name === action.payload.domain) {
          return {
            ...element,
            savedURLList: [...element.savedURLList, action.payload.url],
          };
        } else {
          return element;
        }
      });
      state.domainList = updatedArray;
    },
    reset(state) {
      state.domainList = [];
    },
  },
});

export const {name, reducer, actions} = slice;
