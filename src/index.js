import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import shotgroupReducer from "./reducers/shotgroupReducer";
import settingsReducer from "./reducers/settings";
import { ChakraProvider } from "@chakra-ui/react";

const reducer = combineReducers({
  shotgroup: shotgroupReducer,
  user: userReducer,
  settings: settingsReducer,
});
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
