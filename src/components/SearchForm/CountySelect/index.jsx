import React from "react";
import enhance from "./enhance";
import "./styles.css";

const CountySelect = ({ counties }) => (
  <select className="CountySelect">
    {counties &&
      counties.map(county => (
        <option key={county.subnational2Code} value={county.subnational2Code}>
          {county.name}
        </option>
      ))}
  </select>
);

export default enhance(CountySelect);
