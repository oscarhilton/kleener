export const defaultReducer = (state, action, actionHandlers) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

export default defaultReducer;
