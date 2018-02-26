import { connect } from 'react-redux';
import { fetchRecentNearbyNotableSightings } from '../../sagas';
import { compose, withHandlers } from 'recompose';

// const mapStateToProps = ({ selectableCounties }) => ({
//   selectableCounties,
// });

const mapDispatchToProps = {
  fetchRecentNearbyNotableSightings,
};

export const handleSubmit = ({
  fetchRecentNearbyNotableSightings,
}) => event => {
  event.preventDefault();
  fetchRecentNearbyNotableSightings();
};

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withHandlers({ handleSubmit }),
);
