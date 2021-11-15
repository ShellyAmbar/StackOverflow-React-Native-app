import {
  getQuestionsByIdSuccess,
  getQuestionsByIdFailure,
} from '../actions/Questions';
import {getQuestionsCall} from '../calls/Questions';
import {call, put} from 'redux-saga/effects';
export function* getQuestions(data) {
  const id = data.payload;

  try {
    const response = yield call(getQuestionsCall, id);
    if (response) {
      // console.log(response);
      yield put(getQuestionsByIdSuccess(response));
    } else {
      yield put(getQuestionsByIdFailure('No response'));
    }
  } catch {
    yield put(getQuestionsByIdFailure('Failed with error'));
  }
}
