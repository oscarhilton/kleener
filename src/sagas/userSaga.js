import * as userActions from "redux/user/actions";
import * as userActionTypes from "redux/user/actionTypes";
import { put, takeEvery, call } from "redux-saga/effects";
import { addNewUser, getUserByFacebookID } from "services/Firebase";
import { startFacebook, signOutUser } from "services/Firebase/facebook";
import * as firebase from "firebase";

export function * watchSignInRequest() {
  yield takeEvery(userActionTypes.SIGN_IN_REQUEST, signInRequest);
}

export function * signInRequest(action) {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const response = yield call(startFacebook, provider);
    yield put(userActions.authSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(userActions.authFail, e);
  }
}

export function * watchAuthSuccess() {
  yield takeEvery(userActionTypes.AUTH_SUCCESS, authSuccess);
}

export function * authSuccess(action) {
  if (action.payload.newUser) {
    try {
      yield call(addNewUser, action.payload.user);
      yield put(userActions.signInUserSuccess(action.payload.user));
    } catch (e) {
      yield put(userActions.signInUserFail(e));
    }
  } else {
    try {
      const result = yield call(getUserByFacebookID, action.payload.user.socialId);
      const userValue = result.val();
      const user = userValue[Object.keys(userValue)[0]];
      yield put(userActions.signInUserSuccess({ user, token: action.payload.token }));
    } catch (e) {
      yield put(userActions.signInUserFail(e));
    }
  }
}

export function * watchSignOutUser() {
  yield takeEvery(userActionTypes.SIGN_OUT_REQUEST, signOutUserRequest);
}

export function * signOutUserRequest(action) {
  try {
    const res = yield call(signOutUser);
    console.log(res);
    yield put(userActions.signOutUserSuccess());
  } catch (e) {
    yield put(userActions.signOutUserFail(e));
    console.log(e);
  }
}
