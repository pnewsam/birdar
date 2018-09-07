import { connect } from 'react-redux';
import { compose, branch } from 'recompose';
import { addProps } from '../../utils/recompose';
import LoadingSpinner from '../LoadingSpinner';

const mapStateToProps = ({ isFetching, notableSightings }) => ({
  isFetching: isFetching.isFetching,
  notableSightings: notableSightings.entities,
});

const areThereNotableSightings = ({ notableSightings }) =>
  Boolean(notableSightings.length);

export default compose(
  connect(mapStateToProps),
  addProps({ areThereNotableSightings }),
  branch(({ isFetching }) => isFetching, () => LoadingSpinner),
);
