import React, { Component } from "react";
import store from "../../../stores/configureStore";
import { setSelectedState } from "../../../reducers";
import { US_STATES } from "./usStates";
import downArrow from "./down-arrow.svg";
import "./styles.css";

export class StateInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    store.dispatch(setSelectedState(e.target.value));
  }
  render() {
    return (
      <select
        className="StateSelect"
        name="state"
        onChange={this.handleChange}
        style={{
          background: `#fff url(${downArrow}) no-repeat 100% 50%`
        }}
      >
        {Object.entries(US_STATES).map((state, index) => (
          <option className="StateSelect__option" key={index} value={state[0]}>
            {state[1]}
          </option>
        ))}
      </select>
    );
  }
}

export default StateInput;
