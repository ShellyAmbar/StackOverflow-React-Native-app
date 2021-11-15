import {getMeSuccess, getMeFailure} from '../actions/Me';
import {getMeCall} from '../calls/Me';
import {call, put} from 'redux-saga/effects';
export function* getMe(data) {
  const id = data.payload;

  try {
    const response = yield call(getMeCall, id);
    if (response) {
      yield put(getMeSuccess(response));
    } else {
      yield put(getMeFailure('No response'));
    }
  } catch {
    yield put(getMeFailure('Failed with error'));
  }
}
