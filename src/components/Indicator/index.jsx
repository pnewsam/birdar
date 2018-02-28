import React from "react";
import enhance from "./enhance";

const Indicator = ({ selectedState }) => {
  return <p>Selected State: {selectedState}</p>;
};

export default enhance(Indicator);
