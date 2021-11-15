import {articlesTypes} from '../actions/ActionsTypes';

const initialState = {
  articles: [],
  message: '',
};

const Articles = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case articlesTypes.GET_ARTICLE_BY_ID_SUCCESS: {
      return {...state, articles: payload, message: ''};
    }
    case articlesTypes.GET_ARTICLE_BY_ID_FAILURE: {
      return {...state, articles: [], message: payload};
    }

    default: {
      return {
        ...state,
      };
    }
  }
  return state;
};

export default Articles;
