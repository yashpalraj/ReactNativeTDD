import React from 'react';
import {expectSaga, testSaga} from 'redux-saga-test-plan';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getURLListSaga, {
  fetchURLList,
  getURLListAPI,
} from '../../src/domainStore/saga';
import {actions, initialState} from '../../src/domainStore/slice';
import {call, put} from 'redux-saga-test-plan/matchers';

describe('test saga', () => {
  const mock = new MockAdapter(axios);

  // const getURLListAPI = () => {
  //   // mock.onGet(URL).reply(200, {
  //   //   data: [
  //   //     'www.youtube.com',
  //   //     'www.facebook.com',
  //   //     'www.amazon.com',
  //   //     'www.myntra.com',
  //   //   ],
  //   //   statuscode: true,
  //   // });

  //   // const res = await axios.get(URL);
  //   // console.log('res----', res);
  //   // return res;

  //   return ['Hi', 'YASHPAL'];
  // };

  // // Worker Sagar
  // function* fetchURLList() {
  //   yield call(getURLListAPI);
  //   // try {
  //   //   const res = yield call(getURLListAPI);
  //   //   yield put(actions.getURLListSuccess(res.data.data));
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // }
  it('should call api and get url list froms server', () => {
    // return testSaga(getURLListSaga)
    //   .next()
    //   .takeLatest('YASH', fetchURLList)
    //   .finish()
    //   .isDone();

    testSaga(getURLListSaga, {isMock: true})
      .next()
      .takeLatest(actions.getURLList.type, fetchURLList)
      .next()
      .inspect((f)=> {
        f.
        {
        domainList: [
          {
            name: 'Raj',
            savedURLList: [
              'www.youtube.com',
              'www.facebook.com',
              'www.amazon.com',
              'www.myntra.com',
            ],
          },
        ],
      }});
  });

  // it('should call api and expect response', () => {
  //   return expectSaga(getURLListSaga, {isMock: true})
  //     .returns({hello: 'world'})
  //     .run();
  // });
});
