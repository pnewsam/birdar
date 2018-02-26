import { connect } from 'react-redux';
import { compose, branch, renderNothing } from 'recompose';
import { addProps } from '../../utils/recompose';

const mapStateToProps = ({ notableSightings }) => ({
  notableSightings,
});

const areThereNotableSightings = ({ notableSightings }) =>
  Boolean(notableSightings.length);

export default compose(
  connect(mapStateToProps),
  addProps({ areThereNotableSightings }),
  branch(
    ({ areThereNotableSightings }) => !areThereNotableSightings,
    renderNothing,
  ),
);
