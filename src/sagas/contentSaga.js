import * as contentActionTypes from "redux/content/actionTypes";
import * as contentActions from "redux/content/actions";
import { put, takeEvery, call } from "redux-saga/effects";
import ContentApi from "services/Api/ContentApi";

export function * watchContentRequest() {
  yield takeEvery(contentActionTypes.CONTENT_GET_CONTENT_REQUEST, contentRequest);
};

export function * contentRequest(action) {
  const contentApi = new ContentApi();
  const pageName = action.payload;
  try {
    const response = yield call(contentApi.getPage, pageName);
    yield put(contentActions.contentGetContentSuccess(response.data, pageName));
  } catch (e) {
    console.log("error is", e);
    yield put(contentActions.contentGetContentFail(e));
  }
};
