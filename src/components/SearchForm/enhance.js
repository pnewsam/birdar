import { connect } from "react-redux";
import { requestNotableSightings, setSelectedState } from "../../reducers";

const mapStateToProps = state => ({
  selectedState: state.selectedState
});

const mapDispatchToProps = dispatch => ({
  setSelectedState: state => {
    dispatch(setSelectedState(state));
  },
  requestNotableSightings: state => {
    dispatch(requestNotableSightings(state));
  }
});

export default connect(mapStateToProps, mapDispatchToProps);
