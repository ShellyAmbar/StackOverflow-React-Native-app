import {meTypes} from './ActionsTypes';

export const getMe = payload => {
  return {
    type: meTypes.GET_ME,
    payload,
  };
};

export const getMeSuccess = payload => {
  return {
    type: meTypes.GET_ME_SUCCESS,
    payload,
  };
};
export const getMeFailure = payload => {
  return {
    type: meTypes.GET_ME_FAILURE,
    payload,
  };
};
