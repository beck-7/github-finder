import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./redux/store";

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

render(app, document.querySelector("#root"));
