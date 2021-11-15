import {
  getArticlesByIdFailure,
  getArticlesByIdSuccess,
} from '../actions/Articles';
import {getArticlesCall} from '../calls/Articles';
import {call, put} from 'redux-saga/effects';
export function* getArticles(data) {
  const id = data.payload;

  try {
    const response = yield call(getArticlesCall, id);
    if (response) {
      yield put(getArticlesByIdSuccess(response));
    } else {
      yield put(getArticlesByIdFailure('No response'));
    }
  } catch {
    yield put(getArticlesByIdFailure('Failed with error'));
  }
}
