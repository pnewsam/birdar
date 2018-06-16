import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotableSightings from '../NotableSightings';
import { RARITY_CODES } from '../../constants';

const mapStateToProps = ({ notableSightings }) => ({
  notableSightings,
});

export class NotableSightingsContainer extends Component {
  constructor(props) {
    super(props);
    this.areThereNotableSightings = this.areThereNotableSightings.bind(this);
  }

  areThereNotableSightings() {
    const { notableSightings } = this.props;
    return Boolean(notableSightings.length);
  }

  findRarityCode(comName) {
    const bird = RARITY_CODES.find(bird => bird.comName === comName);
    return bird && bird.rarityCode ? bird.rarityCode : '?';
  }

  render() {
    const { notableSightings } = this.props;
    const { areThereNotableSightings } = this;

    return (
      areThereNotableSightings() && (
        <NotableSightings
          findRarityCode={this.findRarityCode}
          notableSightings={notableSightings}
        />
      )
    );
  }
}

export default connect(mapStateToProps)(NotableSightingsContainer);
