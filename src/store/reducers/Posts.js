import {postsTypes} from '../actions/ActionsTypes';

const initialState = {
  posts: {},
  message: '',
};

const Posts = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case postsTypes.GET_POSTS_BY_ID_SUCCESS: {
      return {...state, posts: payload, message: ''};
    }
    case postsTypes.GET_POSTS_BY_ID_FAILURE: {
      return {...state, message: payload};
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default Posts;
