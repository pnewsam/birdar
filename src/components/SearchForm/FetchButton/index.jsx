import React, { Component } from "react";
import "./styles.css";

const Button = ({ requestNotableSightings, selectedState }) => {
  return (
    <button
      className="Button"
      onClick={e => {
        e.preventDefault();
        requestNotableSightings(selectedState);
      }}
    >
      Fetch Notable Sightings
    </button>
  );
};

export default Button;
