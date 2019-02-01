import { combineReducers } from "redux";
import movieReducer from "~/redux/reducers/movieReducer";

const rootReducer = combineReducers({ movieReducer: movieReducer });

export default rootReducer;
