import {profilesTypes} from '../actions/ActionsTypes';

const initialState = {
  profile: {},
  profiles: [],
  message: '',
};

const Profiles = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case profilesTypes.GET_PROFILE_BY_ID_SUCCESS: {
      return {...state, profile: payload, message: ''};
    }
    case profilesTypes.GET_PROFILE_BY_ID_FAILURE: {
      return {...state, message: payload};
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default Profiles;
