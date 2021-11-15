import {takeLatest, all} from 'redux-saga/effects';

//Action types
import {
  meTypes,
  articlesTypes,
  profilesTypes,
  questionsTypes,
  postsTypes,
} from '../actions/ActionsTypes';
import {getProfiles} from './Profiles';
import {getQuestions} from './Questions';
import {getPosts} from './Posts';
import {getArticles} from './Articles';
import {getMe} from './Me';

//Sagas
export default function* root() {
  yield all([
    yield takeLatest(meTypes.GET_ME, getMe),
    yield takeLatest(articlesTypes.GET_ARTICLE_BY_ID, getArticles),
    yield takeLatest(profilesTypes.GET_PROFILE_BY_ID, getProfiles),
    yield takeLatest(questionsTypes.GET_QUESTOIN_BY_ID, getQuestions),
    yield takeLatest(postsTypes.GET_POSTS_BY_ID, getPosts),
  ]);
}
