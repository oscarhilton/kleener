import defaultReducer from "../utils/defaultReducer";
import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

export const initialState = fromJS({
  pages: {},
});

export const handleGetContentSuccess = (state, action) => {
  console.log("setting", action.payload[0]);
  console.log("module data", action.payload[0]);
  return state.setIn(["pages", `${action.pageName}`], fromJS(action.payload[0]));
};

const actionHandlers = {
  [actionTypes.CONTENT_GET_CONTENT_SUCCESS]: handleGetContentSuccess,
};

const reducer = (state = initialState, action) => defaultReducer(state, action, actionHandlers);
export default reducer;
