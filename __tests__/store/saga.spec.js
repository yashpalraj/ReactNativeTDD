import React from 'react';
import {expectSaga, testSaga} from 'redux-saga-test-plan';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getURLListSaga from '../../src/domainStore/saga';
import {actions} from '../../src/domainStore/slice';
import {call, put} from 'redux-saga-test-plan/matchers';

describe('test saga', () => {
  const URL = 'https://api.npoint.io/37edc2a99c964ca5d869';

  const mock = new MockAdapter(axios);
  const getURLList = async () => {
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

  it('should call api andn get url list from server', async () => {
    const saga = await testSaga(getURLListSaga);
    saga
      .next()
      .takeLatest(actions.getURLList.type, fetchURLList)
      .next()
      .isDone();
  });
});
