import React from "react";
import "./styles.css";
import StateSelect from "./StateSelect";
import FetchButton from "./FetchButton";

const SearchForm = () => {
  return (
    <form className="SearchForm">
      <StateSelect />
      <FetchButton />
    </form>
  );
};

export default SearchForm;
