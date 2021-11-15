import {profilesTypes} from './ActionsTypes';
export const getProfileById = payload => {
  return {
    type: profilesTypes.GET_PROFILE_BY_ID,
    payload,
  };
};

export const getProfileByIdSuccess = payload => {
  return {
    type: profilesTypes.GET_PROFILE_BY_ID_SUCCESS,
    payload,
  };
};

export const getProfileByIdFailure = payload => {
  return {
    type: profilesTypes.GET_PROFILE_BY_ID_FAILURE,
    payload,
  };
};
