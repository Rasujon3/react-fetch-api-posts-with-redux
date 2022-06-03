import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./components/services/reducers/postsReducers";

const store = createStore(postsReducer, applyMiddleware(thunk));
export default store;
