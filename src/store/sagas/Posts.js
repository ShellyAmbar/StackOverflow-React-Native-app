import {getPostsSuccess, getPostsFailure} from '../actions/Posts';
import {getPostsCall} from '../calls/Posts';
import {call, put} from 'redux-saga/effects';
export function* getPosts(data) {
  const id = data.payload;

  try {
    const response = yield call(getPostsCall, id);
    if (response) {
      yield put(getPostsSuccess(response));
    } else {
      yield put(getPostsFailure('No response'));
    }
  } catch {
    yield put(getPostsFailure('Failed with error'));
  }
}
