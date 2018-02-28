import React from "react";
import enhance from "./enhance";
import "./styles.css";

const Indicator = ({ selectedState }) => {
  return (
    <p className="Indicator">
      Selected State:&nbsp;
      <strong>{selectedState}</strong>
    </p>
  );
};

export default enhance(Indicator);
