import { all, fork } from "redux-saga/effects";

import { watchFetchProducts } from "@/components/ProductList/saga";

export default function* rootSaga() {
  yield all([fork(watchFetchProducts)]);
}
