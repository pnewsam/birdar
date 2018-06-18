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
    this.styleRarityCode = this.styleRarityCode.bind(this);
  }

  areThereNotableSightings() {
    const { notableSightings } = this.props;
    return Boolean(notableSightings.length);
  }

  findRarityCode(comName) {
    const bird = RARITY_CODES.find(bird => bird.comName === comName);
    return bird && bird.rarityCode ? bird.rarityCode : '?';
  }

  styleRarityCode(code) {
    if (code >= '3') {
      return { backgroundColor: 'var(--primary-color)' };
    } else if (code === '2') {
      return { backgroundColor: 'var(--secondary-color)' };
    }
    return { backgroundColor: 'var(--green)' };
  }

  render() {
    const { notableSightings } = this.props;
    const { areThereNotableSightings, styleRarityCode } = this;

    return (
      areThereNotableSightings() && (
        <NotableSightings
          findRarityCode={this.findRarityCode}
          notableSightings={notableSightings}
          styleRarityCode={styleRarityCode}
        />
      )
    );
  }
}

export default connect(mapStateToProps)(NotableSightingsContainer);
