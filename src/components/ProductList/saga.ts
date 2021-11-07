import { delay, put, takeLatest } from "@redux-saga/core/effects";

import {
  fetchFailed,
  fetchProductsAction,
  fetchSuccess,
  loadingAction,
} from "./productsSlice";
import { Product } from "@/types";
import fetcher from "@/utils/fetcher";

const placeholderImage = "https://picsum.photos/200";

export function* fetchProducts() {
  try {
    yield put(loadingAction());
    yield delay(3000);

    let products: Product[] = yield fetcher("/products");
    products = products.map(x => ({ ...x, image: placeholderImage }));

    yield put(fetchSuccess(products));
  } catch {
    yield put(fetchFailed());
  }
}

export function* watchFetchProducts() {
  yield takeLatest(fetchProductsAction.type, fetchProducts);
}
