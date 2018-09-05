import reducer from "../reducer";
import * as actionTypes from "../actionTypes";
import { fromJS } from "immutable";

describe("(Reducer) handleGetContentSuccess", () => {
  let state = fromJS({
    pages: {},
  });

  it("Should handle get content success", () => {
    const pageName = "test";
    const action = {
      type: actionTypes.CONTENT_GET_CONTENT_SUCCESS,
      pageName,
      payload: [
        {
          id: 0,
          content: "some content",
        },
      ],
    };
    const expectedState = fromJS({
      pages: {
        [`${pageName}`]: action.payload[0],
      },
    });
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
