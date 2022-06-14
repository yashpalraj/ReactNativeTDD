import {call, put, takeLatest} from 'redux-saga/effects';
import {actions} from './slice';
import axios from 'axios';

const URL = 'https://api.npoint.io/37edc2a99c964ca5d869';

export const getURLListAPI = async () => {
  const res = await axios.get(URL);
  console.log('res----', res);
  return res;
};

// Worker Sagar
export function* fetchURLList(reqData) {
  try {
    console.log('fetchURLList ---', reqData);
    const res = yield call(getURLListAPI);
    console.log('fetchURLList --res--', res);
    if (res.data.statuscode) {
      console.log('fetchURLList ---', res.data.data);
      yield put(actions.getURLListSuccess(res.data.data));
    } else {
      console.log('Else ---', res.data);
    }
  } catch (error) {
    console.log(error);
  }
}

// Watcher Saga
export default function* getURLListSaga() {
  yield takeLatest(actions.getURLList.type, fetchURLList);
}
