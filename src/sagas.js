import { put, takeEvery, call } from 'redux-saga/effects';
import { coinList } from './api/search/coinPriceApi';

const SEARCH_MAIN_REQUEST = 'SEARCH_MAIN_REQUEST';
const SEARCH_MAIN_SUCCEED = 'SEARCH_MAIN_SUCCEED';
const SEARCH_MAIN_FAIL = 'SEARCH_MAIN';

function* incrementAsync(action) {
  try {
    const {
      data: { buyList, sellList },
    } = yield call(coinList, action.payload);
    yield put({ type: SEARCH_MAIN_SUCCEED, buyList, sellList });
  } catch (error) {
    yield put({ type: SEARCH_MAIN_FAIL, error: error });
  }
}

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}
