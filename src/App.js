import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux";
import NotableSightings from "./components/NotableSightings/NotableSightings";
import Button from "./components/Button/Button";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NotableSightings />
          <Button />
        </div>
      </Provider>
    );
  }
}

export default App;
