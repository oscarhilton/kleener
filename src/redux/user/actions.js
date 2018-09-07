import * as actionTypes from "./actionTypes";

export const signInUser = () => ({
  type: actionTypes.SIGN_IN_REQUEST,
});

export const authSuccess = user => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: user,
});

export const authFail = e => ({
  type: actionTypes.AUTH_FAIL,
  payload: e,
});

export const signInUserSuccess = user => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInUserFail = e => ({
  type: actionTypes.SIGN_IN_FAIL,
  payload: e,
});

export const signOutUser = () => ({
  type: actionTypes.SIGN_OUT_REQUEST,
});

export const signOutUserSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS,
});

export const signOutUserFail = e => ({
  type: actionTypes.SIGN_OUT_FAIL,
  payload: e,
});
