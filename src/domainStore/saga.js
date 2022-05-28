import {call, put, takeLatest} from 'redux-saga/effects';
import {actions} from './slice';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const URL = 'https://api.npoint.io/37edc2a99c964ca5d869';
const mock = new MockAdapter(axios);
export const getURLListAPI = async data => {
  console.log('data.isMock----', data.isMock);

  return [
    'www.youtube.com',
    'www.facebook.com',
    'www.amazon.com',
    'www.myntra.com',
  ];

  // if (data.isMock) {
  //   mock.onGet(URL).reply(200, {
  //     data: [
  //       'www.youtube.com',
  //       'www.facebook.com',
  //       'www.amazon.com',
  //       'www.myntra.com',
  //     ],
  //     statuscode: true,
  //   });
  //   const res = await axios.get(URL);
  //   console.log('res--Mock--', res);
  //   return res;
  // } else {
  //   const res = await axios.get(URL);
  //   console.log('res----', res);
  //   return res;
  // }
};

// Worker Sagar
export function* fetchURLList(reqData) {
  try {
    console.log('fetchURLList ---', reqData);
    const res = yield call(getURLListAPI, reqData.payload);
    if (res.data.statuscode) {
      console.log('fetchURLList ---', res.data.data);
      const yash = yield put(actions.getURLListSuccess(res.data.data));
      console.log('getURLListSuccess ---', yash);
    } else {
      console.log('Else ---', res.data);
    }
  } catch (error) {
    console.log(error);
  }
}

// Watcher Saga
export default function* getURLListSaga() {
  yield call(getURLListAPI, {
    isMock: false,
  });
  // yield takeLatest(actions.getURLList.type, fetchURLList);
}
