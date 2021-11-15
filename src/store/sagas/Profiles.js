import {
  getProfileByIdSuccess,
  getProfileByIdFailure,
} from '../actions/Profiles';
import {call, put} from 'redux-saga/effects';
import {getProfileCall} from '../calls/Profiles';

export function* getProfiles(data) {
  const stringToSearch = data.payload;
  try {
    const response = yield call(getProfileCall, stringToSearch);
    if (response && response.data) {
      console.log('response - autocomplete', response.data);
      yield put(getProfileByIdSuccess(response.data));
    } else {
      yield put(getProfileByIdFailure('No response'));
    }
  } catch {
    yield put(getProfileByIdFailure('Failed with error'));
  }
}
