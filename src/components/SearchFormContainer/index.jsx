import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotableSightings, setSelectedState } from '../../reducers';
import SearchForm from '../SearchForm';

const mapStateToProps = ({ selectableCounties, selectedState }) => ({
  selectableCounties,
  selectedState,
});

const mapDispatchToProps = {
  fetchNotableSightings,
  setSelectedState,
};

export class SearchFormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { setSelectedState } = this.props;
    setSelectedState(target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { fetchNotableSightings, selectedState } = this.props;
    fetchNotableSightings(selectedState);
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { selectableCounties } = this.props;
    return (
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        selectableCounties={selectableCounties}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFormContainer);
