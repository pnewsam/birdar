import { connect } from 'react-redux';
import { fetchNotableSightings, setSelectedState } from '../../reducers';
import { compose, withHandlers } from 'recompose';

const mapStateToProps = ({ selectableCounties, selectedState }) => ({
  selectableCounties,
  selectedState,
});

const mapDispatchToProps = {
  fetchNotableSightings,
  setSelectedState,
};

export const handleChange = ({ setSelectedState }) => ({ target }) => {
  setSelectedState(target.value);
};

export const handleSubmit = ({
  fetchNotableSightings,
  selectedState,
}) => event => {
  event.preventDefault();
  fetchNotableSightings(selectedState);
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({ handleChange, handleSubmit }),
);
