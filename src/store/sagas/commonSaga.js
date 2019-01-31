import { call, put, takeEvery, spawn, all } from 'redux-saga/effects';
import sagasConfig from './config';
import request from './../../utils/ApiCaller';

/**
 * This is common saga for actions that need to make request to the backend
 * @param {*} action
 */
function* processRequest({ type, payload, onSuccess, onFail }) {
  const {
    path,
    method,
    successType,
    failType,
  } = sagasConfig[type];
  let token = null;
  const url = yield call(path, payload);
  try {
    const response = yield call(request, url, method, payload, token);

    if (response.status === 200) {
      yield put({ type: successType, payload: response.data });
      if (typeof onSuccess === 'function') {
        yield call(onSuccess, response.data);
      }
    } else {
      yield put({ type: failType, payload: response.error });
      if (typeof onFail === 'function') {
        yield call(onFail, response.data);
      }
    }
  } catch (e) {
    yield put({ type: failType, payload: e });
  }
}

function* saga () {
  yield takeEvery(
    ({ type }) => /(.*)_REQUEST/.test(type),
    processRequest,
  );
}

export const commonSaga = function* () {
  yield all([
    spawn(saga),
  ]);
};
