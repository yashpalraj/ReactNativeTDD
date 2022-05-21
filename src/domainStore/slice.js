import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  domainList: [{name: 'Test', savedURLList: ['www.gmail.com']}],
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
      // state.domainList = [...state, ...action.payload];
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
      // state.domainList = action.payload;

      // state.domainList = [
      //   ...state,
      //   name => {
      //     action.payload.name, savedURLList => [...state.domainList];
      //   },
      // ];
      // state.domainList = [...state, name:{  }];
    },
    reset(state) {
      state.domainList = [];
    },
  },
});

export const {name, reducer, actions} = slice;
