import {call, put, takeLatest} from 'redux-saga/effects';
import {actions} from './slice';
import axios from 'axios';

const URL = 'https://api.npoint.io/37edc2a99c964ca5d869';

const getURLList = async () => {
  const res = await axios.get(URL);
  console.log('res----', res);
  return res;
};

// Worker Sagar
function* fetchURLList() {
  try {
    const res = yield call(getURLList);
    if (res.data.statuscode) {
      yield put(actions.getURLListSuccess(res.data));
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
