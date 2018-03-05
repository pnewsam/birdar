import React from "react";
import enhance from "./enhance";
import downArrow from "../down-arrow.svg";
import "./styles.css";

const CountySelect = ({ counties }) => (
  <select
    className="CountySelect"
    style={{
      background: `#fff url(${downArrow}) no-repeat 100% 50%`
    }}
  >
    {counties &&
      counties.map(county => (
        <option key={county.subnational2Code} value={county.subnational2Code}>
          {county.name}
        </option>
      ))}
  </select>
);

export default enhance(CountySelect);
