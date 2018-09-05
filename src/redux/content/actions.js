import * as actionTypes from "./actionTypes";

// Get Content ------------------------------------

export const contentGetContent = pageName => ({
  type: actionTypes.CONTENT_GET_CONTENT_REQUEST,
  payload: pageName,
});

export const contentGetContentSuccess = (payload, pageName) => {
  return {
    type: actionTypes.CONTENT_GET_CONTENT_SUCCESS,
    payload,
    pageName,
  };
};

export const contentGetContentFail = e => ({
  type: actionTypes.CONTENT_GET_CONTENT_FAIL,
  payload: e,
});
