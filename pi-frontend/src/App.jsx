import React from "react";
import Router from "./router";
import { Provider } from "react-redux";

import MyContext from "./contexts/myContext";
import "./App.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
