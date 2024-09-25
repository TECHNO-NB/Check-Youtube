import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalContext from "./context/GlobalContext.jsx";
import { Provider } from "react-redux";
import ModalContext from "./context/ModalContext.jsx";
import store from "./redux/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalContext>
        <GlobalContext>
          <App />
        </GlobalContext>
      </ModalContext>
    </Provider>
  </React.StrictMode>
);
