import { all } from "redux-saga/effects";
import { watchContentRequest } from "sagas/contentSaga";
import {
  watchCreateSectionRequest,
  watchLoadSectionsRequest,
  watchNewTodoRequest,
  watchCompleteTodoRequest,
} from "sagas/todoSaga";
import { watchSignInRequest, watchAuthSuccess, watchSignOutUser } from "sagas/userSaga";

export default function * rootSaga() {
  yield all([
    watchContentRequest(),
    watchCreateSectionRequest(),
    watchLoadSectionsRequest(),
    watchNewTodoRequest(),
    watchCompleteTodoRequest(),
    watchSignInRequest(),
    watchAuthSuccess(),
    watchSignOutUser(),
  ]);
}
