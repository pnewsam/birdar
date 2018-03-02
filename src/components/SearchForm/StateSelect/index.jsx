import React from "react";
import { US_STATES } from "../../../constants/usStates";
import downArrow from "./down-arrow.svg";
import "./styles.css";

const StateInput = ({ setSelectedState }) => {
  return (
    <select
      className="StateSelect"
      name="state"
      onChange={e => setSelectedState(e.target.value)}
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
};

export default StateInput;
