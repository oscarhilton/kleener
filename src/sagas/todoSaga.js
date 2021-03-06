import * as todoActionTypes from "redux/todo/actionTypes";
import * as todoActions from "redux/todo/actions";
import { put, takeEvery, call } from "redux-saga/effects";
import { getSectionsDB, addSection, addTodoItem, completeTodoItem } from "services/Firebase";

export function * watchCreateSectionRequest() {
  yield takeEvery(todoActionTypes.ADD_SECTIONS_REQUEST, createSectionRequest);
}

export function * createSectionRequest(action) {
  const { name, author } = action.payload;
  try {
    const response = yield call(addSection, name, author);
    yield put(todoActions.createSectionSuccess(response));
    yield put(todoActions.loadSections());
  } catch (e) {
    console.log("error is", e);
    yield put(todoActions.createSectionFail(e));
  }
}

export function * watchLoadSectionsRequest() {
  yield takeEvery(todoActionTypes.LOAD_SECTIONS_REQUEST, loadSectionsRequest);
}

export function * loadSectionsRequest(action) {
  try {
    const response = yield call(getSectionsDB);
    yield put(todoActions.loadSectionsSuccess(response.val()));
  } catch (e) {
    yield put(todoActions.loadSectionsFail(e));
  }
}

export function * watchNewTodoRequest() {
  yield takeEvery(todoActionTypes.ADD_NEW_TODO_REQUEST, newTodoRequest);
}

export function * newTodoRequest(action) {
  const { id, name } = action.payload;
  try {
    yield call(addTodoItem, id, name);
    yield put(todoActions.addNewTodoSuccess());
    yield put(todoActions.loadSections());
  } catch (e) {
    console.log(e);
    yield put(todoActions.addNewTodoFail(e));
  }
}

export function * watchCompleteTodoRequest() {
  yield takeEvery(todoActionTypes.COMPLETE_TODO_REQUEST, completeTodoRequest);
}

export function * completeTodoRequest(action) {
  const { sectionId, todoId } = action.payload;
  try {
    yield call(completeTodoItem, sectionId, todoId);
    yield put(todoActions.loadSections());
  } catch (e) {
    console.log(e);
  }
}
