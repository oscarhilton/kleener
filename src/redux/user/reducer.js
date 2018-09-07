import defaultReducer from "../utils/defaultReducer";
import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

export const initialState = fromJS({
  token: null,
  profile: null,
});

const handleSignInSuccess = (state, action) => {
  const { user, token } = action.payload;
  const { email, firstName, socialId, lastName, picture, stars } = user;
  return state.set("token", token).set("profile", {
    id: socialId,
    email,
    firstName,
    lastName,
    picture,
    stars,
  });
};

const handleSignOutSuccess = (state, action) => {
  return state.set("token", null).set("profile", null);
};

const actionHandlers = {
  [actionTypes.SIGN_IN_SUCCESS]: handleSignInSuccess,
  [actionTypes.SIGN_OUT_SUCCESS]: handleSignOutSuccess,
};

const reducer = (state = initialState, action) => defaultReducer(state, action, actionHandlers);
export default reducer;
