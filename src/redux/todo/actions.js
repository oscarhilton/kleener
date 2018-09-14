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

export const addNewTodo = (id, name) => ({
  type: actionTypes.ADD_NEW_TODO_REQUEST,
  payload: { id, name },
});

export const addNewTodoSuccess = () => ({
  type: actionTypes.ADD_NEW_TODO_SUCCESS,
});

export const addNewTodoFail = e => ({
  type: actionTypes.ADD_NEW_TODO_FAIL,
  payload: e,
});

export const completeTodo = (sectionId, todoId) => ({
  type: actionTypes.COMPLETE_TODO_REQUEST,
  payload: {
    sectionId,
    todoId,
  },
});
