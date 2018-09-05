import defaultReducer from "../utils/defaultReducer";
import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

export const initialState = fromJS({
  sections: [],
});

const handleLoadSections = (state, action) => {
  console.log(action.payload, "payload");
  const array = Object.keys(action.payload).map(section => ({
    id: action.payload[section].id,
    name: action.payload[section].name,
    timestamp: action.payload[section].timestamp,
  }));
  return state.set("sections", array);
};

const actionHandlers = {
  [actionTypes.LOAD_SECTIONS_SUCCESS]: handleLoadSections,
};

const reducer = (state = initialState, action) => defaultReducer(state, action, actionHandlers);
export default reducer;
