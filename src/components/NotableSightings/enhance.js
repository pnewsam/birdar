import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    notableSightings: state.notableSightings
  };
};

export default connect(mapStateToProps);
