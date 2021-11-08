import { delay, put, takeLatest } from "@redux-saga/core/effects";

import {
  loadProducts,
  setProducts,
  setLoadingProducts,
  ProductFilters,
  setProductCount,
  loadProductTypes,
  loadBrands,
  setBrands,
  setProductTypes,
  setLoadingBrands,
  setLoadingProductTypes,
} from "./productsSlice";
import { Product } from "@/types";
import fetcher from "@/utils/fetcher";
import QueryBuilder from "@/utils/QueryBuilder";

const placeholderImage = "https://picsum.photos/200";

type FetchProductsSaga = {
  type: string;
  payload: ProductFilters;
};

function* fetchProducts({ payload }: FetchProductsSaga) {
  const paginationOptions = {
    current: payload.pagination?.currentPage || 1,
    perPage: payload.pagination?.itemsPerPage || 16,
  };

  const queryBuilder = new QueryBuilder();
  const queries = queryBuilder
    .filter("itemType", payload.productType)
    .filter("tag", payload.tag)
    .filter("manufacturer", payload.brand)
    .sort("added")
    .orderBy("desc")
    .paginate(
      (paginationOptions.current - 1) * paginationOptions.perPage,
      paginationOptions.perPage
    )
    .toString();

  try {
    yield put(setLoadingProducts("loading"));
    yield delay(3000);

    const response: Response = yield fetcher(`/products${queries}`);
    const totalCount = Number(response.headers.get("X-Total-Count"));

    let products: Product[] = yield response.json();

    products = products.map((x, i) => ({
      ...x,
      image: `${placeholderImage}?random=${i}`,
    }));

    yield put(setProducts(products));
    yield put(setProductCount(totalCount));
    yield put(setLoadingProducts("success"));
  } catch {
    yield put(setLoadingProducts("error"));
  }
}

function* fetchBrands() {
  try {
    yield put(setLoadingBrands("loading"));
    yield delay(3000);

    const response: Response = yield fetcher("/brands");
    let result: string[] = yield response.json();

    yield put(setBrands(result));
    yield put(setLoadingBrands("success"));
  } catch {}
}

function* fetchProductTypes() {
  try {
    yield put(setLoadingProductTypes("loading"));
    yield delay(3000);

    const response: Response = yield fetcher("/product_types");
    let result: string[] = yield response.json();

    yield put(setProductTypes(result));
    yield put(setLoadingProductTypes("success"));
  } catch {}
}

export function* watchFetchProducts() {
  yield takeLatest(loadProducts.type, fetchProducts);
}

export function* watchFetchProductTypes() {
  yield takeLatest(loadProductTypes.type, fetchProductTypes);
}
export function* watchFetchBrands() {
  yield takeLatest(loadBrands.type, fetchBrands);
}
