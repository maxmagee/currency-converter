import { call, takeEvery, put, select } from 'redux-saga/effects';

import {
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY,
  setConversionError,
  setConversionResult
} from '../actions/currencies';
import { getLatestRate } from '../api/currencies';

function* fetchLatestConversionRates(action) {
  const errorMessage = 'Error updating conversion rate.';

  try {
    let currency = action.currency;

    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }

    const response = yield call(getLatestRate, currency);
    const result = yield response.data;

    if (result.error) {
      yield put(setConversionError(errorMessage));
    } else {
      yield put(setConversionResult(result));
    }
  } catch (error) {
    yield put(setConversionError(errorMessage));
  }
}

export default function* rootSaga() {
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
}
