import { takeLatest, takeEvery, put, call, delay } from "redux-saga/effects";
import api from "~/services/api";
import { movies, genres, movie } from "~/services/paths";

import moviePagination from "./moviePagination";

import Types from "~/redux/types/index";

function* getApiData(data) {
  try {
    const query = data.payload.searchValue;
    if (query === "") {
      return;
    }
    yield put({ type: Types.REQUEST_SEACH_API });
    yield delay(1000);
    const response = yield call(api.get, movies.options.url + query);

    const moviesPagination = moviePagination(response);

    yield put({
      type: Types.SUCESS_SEARCH_API,
      payload: { movies: response.data, ...moviesPagination }
    });
  } catch (error) {
    yield put({
      type: Types.ERROR_SEARCH_API,
      payload: {
        error
      }
    });
  }
}

function* getApiGenres() {
  try {
    const response = yield call(api.get, genres.options.url);
    yield put({
      type: Types.SUCESS_GENRES_API,
      payload: {
        genres: response.data.genres
      }
    });
  } catch (error) {
    yield put({
      type: Types.ERROR_SEARCH_API,
      payload: {
        error
      }
    });
  }
}

function* getMovieDetails({ payload }) {
  try {
    const { options } = movie(payload.id);
    const response = yield call(api.get, options.url);

    yield put({
      type: Types.SUCESS_MOVIE_API,
      payload: {
        currentMovie: response.data
      }
    });
  } catch (error) {
    yield put({
      type: Types.ERROR_SEARCH_API,
      payload: {
        error
      }
    });
  }
}

export function* watchGetApiGenres() {
  yield takeLatest(Types.REQUEST_GENRE_API, getApiGenres);
}

export function* watchGetApiData() {
  yield takeLatest(Types.HANDLE_SEARCH, getApiData);
}

export function* watchGetMovieDetails() {
  yield takeEvery(Types.REQUEST_MOVIE_API, getMovieDetails);
}
