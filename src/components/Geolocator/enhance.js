import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { fetchRecentNearbyNotableSightings, logPosition } from '../../reducers';
import { extractLatAndLong } from '../../utils';

const mapStateToProps = state => ({
  position: state.position,
});

const mapDispatchToProps = {
  fetchRecentNearbyNotableSightings,
  logPosition,
};

export function componentDidMount() {
  const { logPosition } = this.props;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latAndLong = extractLatAndLong(position);
        logPosition(latAndLong);
      },
      error => {
        console.log(error);
      },
    );
  }
}

export function componentDidUpdate(prevProps) {
  const { fetchRecentNearbyNotableSightings, position } = this.props;
  if (position && !prevProps.position) {
    fetchRecentNearbyNotableSightings(position);
  }
}

const handleClick = ({ fetchRecentNearbyNotableSightings }) => () => {
  const payload = {
    long: -76.51,
    lat: 42.46,
  };
  fetchRecentNearbyNotableSightings(payload);
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({ componentDidMount, componentDidUpdate }),
  withHandlers({ handleClick }),
);
