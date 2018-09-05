import defaultReducer from "../utils/defaultReducer";
import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

export const initialState = fromJS({
  token: null,
  profile: null,
});

const handleSignInSuccess = (state, action) => {
  const { user, token } = action.payload;
  const { email, first_name, id, last_name, picture } = user;
  return state.set("token", token).set("profile", {
    id,
    email,
    firstName: first_name,
    lastName: last_name,
    picture: picture.data.url,
  });
};

const actionHandlers = {
  [actionTypes.SIGN_IN_SUCCESS]: handleSignInSuccess,
};

const reducer = (state = initialState, action) => defaultReducer(state, action, actionHandlers);
export default reducer;
