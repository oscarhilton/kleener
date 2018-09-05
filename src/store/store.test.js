import makeStore from "./store";

describe("(Redux) Store", () => {
  it("Should return a store with some stuff in", () => {
    makeStore().then(store => {
      const state = store.getState();
      expect(state.content).toBeDefined();
      expect(state.modules).toBeDefined();
    });
  });
});
