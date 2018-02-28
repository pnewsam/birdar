import { connect } from "react-redux";
import { requestNotableSightings, setSelectedState } from "../../reducers";

const mapDispatchToProps = dispatch => ({
  setSelectedState: state => {
    dispatch(setSelectedState(state));
  },
  requestNotableSightings: () => {
    dispatch(requestNotableSightings);
  }
});

export default connect(null, mapDispatchToProps);
