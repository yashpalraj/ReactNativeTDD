import React from 'react';
import {expectSaga, testSaga} from 'redux-saga-test-plan';
import {call} from 'redux-saga-test-plan/matchers';
import {takeLatest} from 'redux-saga/effects';
import getURLListSaga, {
  fetchURLList,
  getURLListAPI,
} from '../../src/domainStore/saga';
import {actions} from '../../src/domainStore/slice';

describe('test saga', () => {
  it('should call api and get url list froms server', () => {
    testSaga(getURLListSaga, {
      type: 'domain/getURLList',
      payload: {
        isMock: false,
      },
    })
      .next()
      .call(getURLListAPI, {
        isMock: false,
      })
      .next()
      .is([
        'www.youtube.com',
        'www.facebook.com',
        'www.amazon.com',
        'www.myntra.com',
      ])
      // .returns({
      //   data: {
      //     data: [
      //       'www.youtube.com',
      //       'www.facebook.com',
      //       'www.amazon.com',
      //       'www.myntra.com',
      //     ],
      //     statuscode: true,
      //   },
      //   status: 200,
      // })
      // .next()
      // .takeLatest(
      //   actions.getURLList.type,
      //   testSaga(fetchURLList, {
      //     type: 'domain/getURLList',
      //     payload: {
      //       isMock: false,
      //     },
      //   })
      //     .next()
      //     .call(getURLListAPI, {
      //       isMock: false,
      //     })
      //     .next()
      //     .returns([
      //       'www.youtube.com',
      //       'www.facebook.com',
      //       'www.amazon.com',
      //       'www.myntra.com',
      //     ])
      //     .next()
      //     .is({
      //       type: 'domain/getURLListSuccess',
      //       payload: [
      //         'www.youtube.com',
      //         'www.facebook.com',
      //         'www.amazon.com',
      //         'www.myntra.com',
      //       ],
      //     }),
      // )
      .next()
      .finish()
      .isDone();
  });

  // it('should get url list froms server', () => {
  //   return expectSaga(getURLListSaga, {isMock: true})
  //     .provide([takeLatest(actions.getURLList.type, fetchURLList)])
  //     .run();
  // });
});
