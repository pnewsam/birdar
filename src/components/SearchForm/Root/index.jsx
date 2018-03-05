import React from "react";
import CountySelect from "../CountySelect";
import StateSelect from "../StateSelect";
import FetchButton from "../FetchButton";
import enhance from "./enhance";
import "./styles.css";

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
