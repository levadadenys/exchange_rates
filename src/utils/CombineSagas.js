import { spawn, all } from 'redux-saga/effects';
import {
  commonSaga as common,
} from './../store/sagas';

const rootSaga = function* () {
  yield all([
    spawn(common),
  ]);
};

export default rootSaga;
