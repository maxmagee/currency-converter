import { takeEvery } from 'redux-saga/effects';

// 1. Swap currency
// 2. Change base currency
// 3. Upon initial app load

import { CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, SWAP_CURRENCY } from '../actions/currencies';

function* fetchLatestConversionRates(action) {
  console.log('TODO: Update the things', action);
  yield;
}

export default function* rootSaga() {
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
}
