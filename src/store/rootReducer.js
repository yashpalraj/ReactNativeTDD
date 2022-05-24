import {combineReducers} from '@reduxjs/toolkit';
import domainReducers from '../domainStore';

const createReducer = asyncReducers =>
  combineReducers({
    ...asyncReducers,
    domain: domainReducers,
  });
export default createReducer;
