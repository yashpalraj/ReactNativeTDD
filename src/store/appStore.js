import {configureStore} from '@reduxjs/toolkit';
import domainReducers from '../domainStore';

const appStore = configureStore({
  reducer: {
    domain: domainReducers,
  },
});

export default appStore;
