import * as actions from "../actions";
import * as actionTypes from "../actionTypes";

describe("(Action) contentGetContent", () => {
  it("Should dispatch content get request with pageName", () => {
    const pageName = "fakePage";
    expect(actions.contentGetContent(pageName)).toEqual({
      type: actionTypes.CONTENT_GET_CONTENT_REQUEST,
      payload: pageName,
    });
  });
});

describe("(Action) contentGetContentSuccess", () => {
  it("Should dispatch success with payload pageName", () => {
    const pageName = "fakePage";
    const payload = { data: [1] };
    expect(actions.contentGetContentSuccess(payload, pageName)).toEqual({
      type: actionTypes.CONTENT_GET_CONTENT_SUCCESS,
      payload,
      pageName,
    });
  });
});

describe("(Action) contentGetContentFail", () => {
  it("Should dispatch fail with error", () => {
    const error = "error here";
    expect(actions.contentGetContentFail(error)).toEqual({
      type: actionTypes.CONTENT_GET_CONTENT_FAIL,
      payload: error,
    });
  });
});
