import React, { Component } from "react";
import { requestNotableSightings } from "../../../reducers";
import store from "../../../stores/configureStore";
import "./styles.css";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    store.dispatch(requestNotableSightings);
  }
  render() {
    return (
      <button className="Button" onClick={this.handleClick}>
        Fetch Notable Sightings
      </button>
    );
  }
}

export default Button;
