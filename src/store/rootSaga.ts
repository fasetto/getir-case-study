import { all, fork } from "redux-saga/effects";

import {
  watchFetchBrands,
  watchFetchProducts,
  watchFetchProductTypes,
} from "@/components/ProductList/saga";

export default function* rootSaga() {
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchBrands),
    fork(watchFetchProductTypes),
  ]);
}
