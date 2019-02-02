import { watchGetApiData } from "./movieSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchGetApiData()]);
}
