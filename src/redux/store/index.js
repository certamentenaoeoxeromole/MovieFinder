import { createStore, applyMiddleware } from "redux";
import rootReducer from "~/redux/reducers/rootReducer";
import Thunk from "redux-thunk";
import Promise from "redux-promise";

const store = createStore(rootReducer, applyMiddleware(Thunk, Promise));
export default store;
