import {meTypes} from '../actions/ActionsTypes';

const initialState = {
  me: [],
  message: '',
};

const Me = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case meTypes.GET_ME_SUCCESS: {
      return {...state, me: payload, message: ''};
    }
    case meTypes.GET_ME_FAILURE: {
      return {...state, me: [], message: payload};
    }

    default: {
      return {
        ...state,
      };
    }
  }
  return state;
};

export default Me;
