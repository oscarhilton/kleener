import * as userActions from "redux/user/actions";
import * as userActionTypes from "redux/user/actionTypes";
import { put, takeEvery, call } from "redux-saga/effects";
import { startFacebook } from "services/Firebase/facebook";
import * as firebase from "firebase";

export function * watchSignInRequest() {
  yield takeEvery(userActionTypes.SIGN_IN_REQUEST, signInRequest);
};

export function * signInRequest(action) {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const response = yield call(startFacebook, provider);
    yield put(userActions.signInUserSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(userActions.signInUserFail, e);
  }
};
