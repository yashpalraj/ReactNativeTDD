import {combineReducers} from '@reduxjs/toolkit';
import {reducer as domain} from './slice';

const domainReducers = combineReducers({
  domain,
});

export default domainReducers;
