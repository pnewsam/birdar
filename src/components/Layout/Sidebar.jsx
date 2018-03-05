import React from "react";
import "./styles.css";
import Console from "./Console";
import NotableSightings from "../NotableSightings/Root";

const Sidebar = props => {
  return (
    <div className="Sidebar">
      <Console />
      <NotableSightings />
    </div>
  );
};

export default Sidebar;
