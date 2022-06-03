import axios from "axios";
import {
  GET_POSTS_ERROR,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "../constants/postsConstants";

export const getAllPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_REQUEST });

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: GET_POSTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_POSTS_ERROR, payload: error.message });
  }
};
