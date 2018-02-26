import React from "react";

const NotableSighting = ({ comName, sciName, locName, obsDt }) => {
  return (
    <p>
      <strong>{comName}</strong>&nbsp;
      <i>({sciName})</i> at&nbsp;
      <span>{locName}</span> at&nbsp;
      <span>{obsDt}</span>
    </p>
  );
};

export default NotableSighting;
