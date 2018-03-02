import React from "react";
import "./styles.css";
import CountySelect from "./CountySelect";
import StateSelect from "./StateSelect";
import FetchButton from "./FetchButton";
import enhance from "./enhance";

const SearchForm = ({
  requestNotableSightings,
  selectedState,
  setSelectedState
}) => {
  return (
    <form className="SearchForm">
      <StateSelect setSelectedState={setSelectedState} />
      <CountySelect selectedState={selectedState} />
      <FetchButton
        requestNotableSightings={requestNotableSightings}
        selectedState={selectedState}
      />
    </form>
  );
};

export default enhance(SearchForm);
