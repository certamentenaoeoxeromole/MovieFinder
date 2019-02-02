import {
  watchGetApiData,
  watchGetApiGenres,
  watchGetMovieDetails
} from "./movieSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchGetApiData(), watchGetApiGenres(), watchGetMovieDetails()]);
}
