// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; // Import Provider
import { store } from "./store"; // Import Redux store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Gunakan Provider dan berikan store */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
