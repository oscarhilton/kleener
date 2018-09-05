import * as actionTypes from "./actionTypes";

export const signInUser = () => ({
  type: actionTypes.SIGN_IN_REQUEST,
});

export const signInUserSuccess = user => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInUserFail = e => ({
  type: actionTypes.SIGN_IN_FAIL,
  payload: e,
});
