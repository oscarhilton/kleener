import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/store";
import createRoutes from "./routes";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App store={store} routes={createRoutes(store)} />, div);
});
