import React from "react";
import "./styles.css";

const NotableSighting = ({ comName, locName, obsDt }) => {
  return (
    <div className="NotableSighting">
      <p>
        <span className="NotableSighting__comName">{comName}</span>
        <span>&nbsp;at&nbsp;</span>
        <span className="NotableSighting__locName">{locName}</span>
      </p>
      <p className="NotableSighting__obsDate">{obsDt}</p>
    </div>
  );
};

export default NotableSighting;
