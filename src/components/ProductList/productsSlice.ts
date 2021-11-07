import { Product } from "@/types";
import { createAction, createReducer } from "@reduxjs/toolkit";

type LoadingStatus = "idle" | "loading" | "error" | "success";

type ProductsState = {
  data: Product[];
  status: LoadingStatus;
  filters: {
    type: string;
    brand: string;
    tag: string;
  };
  productTypes: string[];
  brands: string[];
};

export const filterByType = createAction<string>("products/filterByType");
export const fetchProductsAction = createAction("products/fetch");

export const fetchSuccess = createAction<Product[]>("products/fetchSuccess");
export const fetchFailed = createAction("products/fetchFailed");
export const loadingAction = createAction("products/loading");

const initialState: ProductsState = {
  data: [],
  status: "idle",
  filters: {
    type: "mug",
    brand: "all",
    tag: "all",
  },
  productTypes: [],
  brands: [],
};

const productsReducer = createReducer(initialState, builder => {
  builder
    .addCase(filterByType, (state, action) => {
      state.filters.type = action.payload;
    })
    .addCase(fetchSuccess, (state, action) => {
      state.data = action.payload;

      state.productTypes = Array.from(
        new Set(action.payload.map(x => x.itemType))
      );

      state.brands = Array.from(
        new Set(action.payload.map(x => x.manufacturer))
      );

      state.status = "success";
    })

    .addCase(fetchFailed, (state, action) => {
      state.status = "error";
    })

    .addCase(loadingAction, (state, action) => {
      state.status = "loading";
    });
});

const productsSlice = {
  reducer: productsReducer,
  actions: {
    filterByType,
    fetchProducts: fetchProductsAction,
    fetchSuccess,
    fetchFailed,
    loadingAction,
  },
};

export default productsSlice;
