import React from "react";
import enhance from "./enhance";
import styles from "./styles.css";
import NotableSighting from "../NotableSighting";

const NotableSightings = ({ notableSightings }) => {
  return (
    <div className="NotableSightings">
      {notableSightings &&
        notableSightings.map((notableSighting, index) => (
          <NotableSighting
            key={index}
            comName={notableSighting.comName}
            locName={notableSighting.locName}
            obsDt={notableSighting.obsDt}
            sciName={notableSighting.sciName}
          />
        ))}
    </div>
  );
};

export default enhance(NotableSightings);
