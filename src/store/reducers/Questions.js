import {questionsTypes} from '../actions/ActionsTypes';

const initialState = {
  questions: [],
  message: '',
};

const Questions = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case questionsTypes.GET_QUESTOIN_BY_ID_SUCCESS: {
      return {...state, questions: payload, message: ''};
    }
    case questionsTypes.GET_QUESTOIN_BY_ID_FAILURE: {
      return {...state, message: payload};
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default Questions;
