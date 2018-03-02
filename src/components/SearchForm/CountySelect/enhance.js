import { US_COUNTIES_BY_STATE } from "./usCountiesByState";
import { compose, mapProps } from "recompose";

export default compose(
  mapProps(({ selectedState }) => ({
    counties: US_COUNTIES_BY_STATE[selectedState]
  }))
);
