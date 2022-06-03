import {
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "../constants/postsConstants";

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        isLoading: false,
        error: null,
        posts: action.payload,
      };
    case GET_POSTS_ERROR:
      return {
        isLoading: false,
        posts: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
