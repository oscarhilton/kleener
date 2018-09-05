import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import makeStore from "./store/store";
import createRoutes from "./routes";

makeStore().then((store) => {
  ReactDOM.render(<App store={store} routes={createRoutes(store)} />, document.getElementById("root"));
});

// registerServiceWorker();
