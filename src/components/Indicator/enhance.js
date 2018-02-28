import { connect } from "react-redux";

const mapStateToProps = state => ({
  selectedState: state.selectedState
});

export default connect(mapStateToProps);
