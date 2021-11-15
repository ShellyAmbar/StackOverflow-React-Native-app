import {articlesTypes} from './ActionsTypes';

export const getArticlesById = payload => {
  return {
    type: articlesTypes.GET_ARTICLE_BY_ID,
    payload,
  };
};

export const getArticlesByIdSuccess = payload => {
  return {
    type: articlesTypes.GET_ARTICLE_BY_ID_SUCCESS,
    payload,
  };
};
export const getArticlesByIdFailure = payload => {
  return {
    type: articlesTypes.GET_ARTICLE_BY_ID_FAILURE,
    payload,
  };
};
