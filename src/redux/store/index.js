import { createStore, applyMiddleware } from "redux";
import rootReducer from "~/redux/reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "~/redux/sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
