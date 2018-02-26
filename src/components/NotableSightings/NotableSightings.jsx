import React from "react";
// import enhance from "./enhance";
import enhance from "./enhanceWithSampleData";
import NotableSighting from "../NotableSighting/NotableSighting";

const NotableSightings = ({ notableSightings }) => {
  return (
    <div>
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
