import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../api/notableSightings';

export function* fetchRecentNearbyNotableSightings(action) {
  try {
    const sightings = yield call(
      api.fetchRecentNearbyNotableSightings,
      action.payload,
    );
    yield put({
      type: 'FETCH_RECENT_NEARBY_NOTABLE_SIGHTINGS_SUCCESS',
      payload: { sightings },
    });
  } catch (e) {
    yield put({
      type: 'FETCH_RECENT_NEARBY_NOTABLE_SIGHTINGS_FAILURE',
      message: e.message,
    });
  }
}

function* sightingsSaga() {
  yield takeEvery(
    'FETCH_RECENT_NEARBY_NOTABLE_SIGHTINGS_REQUEST',
    fetchRecentNearbyNotableSightings,
  );
}

export function* logPosition(action) {
  try {
    yield put({
      type: 'LOG_POSITION_SUCCESS',
      payload: action.payload,
    });
  } catch (e) {
    yield put({
      type: 'LOG_POSITION_FAILURE',
      message: e.message,
    });
  }
}

function* positionSaga() {
  yield takeEvery('LOG_POSITION', logPosition);
}

export default function* rootSaga() {
  yield all([sightingsSaga(), positionSaga()]);
}
