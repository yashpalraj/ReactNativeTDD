import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  domainList: [],
};

export const slice = createSlice({
  name: 'domain',
  initialState,
  reducers: {
    getURLList(state) {},
    getURLListSuccess(state, action) {
      console.log('action----', action);

      if (state.domainList.length > 0) {
        const updatedArray = state.domainList.map(element => {
          if (element.name === 'Raj') {
            return {
              ...element,
              savedURLList: [...element.savedURLList, ...action.payload],
            };
          } else {
            return element;
          }
        });
        state.domainList = updatedArray;
      } else {
        state.domainList = [
          ...state.domainList,
          {name: 'Raj', savedURLList: [...action.payload]},
        ];
      }
    },
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
