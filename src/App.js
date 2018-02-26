import React, { Component } from "react";
import NotableSightings from "./components/NotableSightings/NotableSightings";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotableSightings />
      </div>
    );
  }
}

export default App;
