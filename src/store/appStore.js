import {configureStore} from '@reduxjs/toolkit';
import domainReducers from '../domainStore';

export default configureStore({
  reducer: {
    domain: domainReducers,
  },
});
