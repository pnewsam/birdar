import React from "react";
import "./styles.css";
import StateSelect from "./StateSelect";
import FetchButton from "./FetchButton";
import enhance from "./enhance";

const SearchForm = ({ requestNotableSightings, setSelectedState }) => {
  return (
    <form className="SearchForm">
      <StateSelect setSelectedState={setSelectedState} />
      <FetchButton requestNotableSightings={requestNotableSightings} />
    </form>
  );
};

export default enhance(SearchForm);
