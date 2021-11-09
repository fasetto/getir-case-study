import { all, fork } from "redux-saga/effects";

import {
  watchFetchBrands,
  watchFetchProducts,
  watchFetchProductTypes,
  watchFetchTags,
} from "@/components/ProductList/sagas";

export default function* rootSaga() {
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchBrands),
    fork(watchFetchProductTypes),
    fork(watchFetchTags),
  ]);
}
