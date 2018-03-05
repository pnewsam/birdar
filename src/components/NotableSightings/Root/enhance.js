import { connect } from "react-redux";

const mapStateToProps = state => ({
  notableSightings: state.notableSightings
});

export default connect(mapStateToProps);
