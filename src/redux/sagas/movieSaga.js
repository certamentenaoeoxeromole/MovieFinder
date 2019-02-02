import { takeLatest, takeEvery, put, call, delay } from "redux-saga/effects";
import api from "~/services/api";
import Types from "~/redux/types/index";

function* getApiData(data) {
  try {
    yield delay(2000);
    const query = data.payload.searchValue;
    yield put({ type: Types.REQUEST_API_DATA });
    const response = yield call(api.get, query);
    yield put({
      type: Types.SUCESS_SEARCH_API,
      payload: { movies: response.data }
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

export function* watchGetApiData() {
  yield takeLatest(Types.HANDLE_SEARCH, getApiData);
}
