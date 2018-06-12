import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotableSightings from '../NotableSightings';

const mapStateToProps = ({ notableSightings }) => ({
  notableSightings,
});

export class NotableSightingsContainer extends Component {
  render() {
    const { notableSightings } = this.props;

    return <NotableSightings notableSightings={notableSightings} />;
  }
}

export default connect(mapStateToProps)(NotableSightingsContainer);
