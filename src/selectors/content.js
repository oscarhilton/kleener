import { createSelector } from "reselect";

export const contentPagesSelector = state => state.content.get("pages");
export const contentPageSelectorFactory = pageName => {
  return createSelector(
    [contentPagesSelector],
    (pages) =>
      pages.get(`${pageName}`)
        ? pages.get(`${pageName}`).toJS()
        : {}
  );
};
