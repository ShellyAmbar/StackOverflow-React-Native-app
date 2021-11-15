import {postsTypes} from './ActionsTypes';

export const getPosts = payload => {
  return {
    type: postsTypes.GET_WEEKLY_WEATHER,
    payload,
  };
};

export const getPostsSuccess = payload => {
  return {
    type: postsTypes.GET_POSTS_BY_ID_SUCCESS,
    payload,
  };
};
export const getPostsFailure = payload => {
  return {
    type: postsTypes.GET_POSTS_BY_ID_FAILURE,
    payload,
  };
};
