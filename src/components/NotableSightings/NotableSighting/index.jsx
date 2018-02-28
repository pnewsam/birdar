import React from "react";
import "./styles.css";

const NotableSighting = ({ comName, locName, obsDt }) => {
  return (
    <div className="NotableSighting">
      <p className="NotableSighting__comName">{comName}</p>
      <p className="NotableSighting__locName">{locName}</p>
      <p className="NotableSighting__obsDate">{obsDt}</p>
    </div>
  );
};

export default NotableSighting;
