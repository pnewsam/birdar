import React, { Component } from "react";
import { requestNotableSightings } from "../../redux";
import store from "../../redux";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    store.dispatch(requestNotableSightings);
  }
  render() {
    return <button onClick={this.handleClick}>Fetch Notable Sightings</button>;
  }
}

export default Button;
