import { all } from "redux-saga/effects";
import { watchContentRequest } from "sagas/contentSaga";
import { watchCreateSectionRequest, watchLoadSectionsRequest } from "sagas/todoSaga";
import { watchSignInRequest } from "sagas/userSaga";

export default function * rootSaga() {
  yield all([
    watchContentRequest(),
    watchCreateSectionRequest(),
    watchLoadSectionsRequest(),
    watchSignInRequest(),
  ]);
};
