import {questionsTypes} from './ActionsTypes';

export const getQuestionsById = payload => {
  return {
    type: questionsTypes.GET_QUESTOIN_BY_ID,
    payload,
  };
};

export const getQuestionsByIdSuccess = payload => {
  return {
    type: questionsTypes.GET_QUESTOIN_BY_ID_SUCCESS,
    payload,
  };
};
export const getQuestionsByIdFailure = payload => {
  return {
    type: questionsTypes.GET_QUESTOIN_BY_ID_FAILURE,
    payload,
  };
};
