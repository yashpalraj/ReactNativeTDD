import {call, put, takeLatest} from 'redux-saga/effects';
import {actions} from './slice';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const URL = 'https://api.npoint.io/37edc2a99c964ca5d869';
const mock = new MockAdapter(axios);

const getURLListAPI = async data => {
  if (data.isMock) {
    mock.onGet(URL).reply(200, {
      data: [
        'www.youtube.com',
        'www.facebook.com',
        'www.amazon.com',
        'www.myntra.com',
      ],
      statuscode: true,
    });
    const res = await axios.get(URL);
    return res;
  } else {
    const res = await axios.get(URL);
    console.log('res----', res);
    return res;
  }
};

// Worker Sagar
export function* fetchURLList(reqData) {
  console.log('fetchURLList ---', reqData.payload);
  try {
    const res = yield call(getURLListAPI, reqData.payload);
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
