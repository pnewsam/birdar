import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux";
import Sidebar from "./components/Layout/Sidebar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Sidebar />
        </div>
      </Provider>
    );
  }
}

export default App;
