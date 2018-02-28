import React, { Component } from "react";
import "./styles.css";

const Button = ({ requestNotableSightings }) => {
  return (
    <button
      className="Button"
      onClick={e => {
        e.preventDefault();
        requestNotableSightings();
      }}
    >
      Fetch Notable Sightings
    </button>
  );
};

export default Button;
