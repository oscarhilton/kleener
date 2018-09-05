import * as actionTypes from "./actionTypes";

export const loadSections = () => ({
  type: actionTypes.LOAD_SECTIONS_REQUEST,
});

export const loadSectionsSuccess = data => ({
  type: actionTypes.LOAD_SECTIONS_SUCCESS,
  payload: data,
});

export const loadSectionsFail = e => ({
  type: actionTypes.LOAD_SECTIONS_FAIL,
  payload: e,
});

export const createSection = (name, author) => ({
  type: actionTypes.ADD_SECTIONS_REQUEST,
  payload: { name, author },
});

export const createSectionSuccess = res => ({
  type: actionTypes.ADD_SECTIONS_SUCCESS,
  payload: res,
});

export const createSectionFail = e => ({
  type: actionTypes.ADD_SECTIONS_FAIL,
});
