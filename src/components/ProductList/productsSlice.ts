import { LoadingStatus, Product } from "@/types";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { SortOptionType } from "../Sortbox";

export type ProductFilters = {
  productType?: string;
  brands?: string[];
  tags?: string[];
  sortBy?: SortOptionType;
  pagination?: {
    currentPage?: number;
    itemsPerPage?: number;
  };
};

type ProductsState = {
  data: Product[];
  status: LoadingStatus;
  filters: ProductFilters;
  productTypes: {
    data: string[];
    status: LoadingStatus;
  };
  brands: {
    data: string[];
    status: LoadingStatus;
  };
  tags: {
    data: string[];
    status: LoadingStatus;
  };
  productCount: number;
};

const initialState: ProductsState = {
  data: [],
  status: "idle",
  filters: {
    productType: "mug",
    brands: [],
    tags: [],
    sortBy: "price_asc",
    pagination: {
      currentPage: 1,
      itemsPerPage: 16,
    },
  },
  productTypes: {
    data: [],
    status: "idle",
  },
  brands: {
    data: [],
    status: "idle",
  },
  tags: {
    data: [],
    status: "idle",
  },
  productCount: 0,
};

export const setFilters = createAction<ProductFilters>("products/set_filters");
export const loadProducts = createAction<ProductFilters>(
  "products/load_products"
);

export const setProducts = createAction<Product[]>("products/set_products");
export const setLoadingProducts = createAction<LoadingStatus>(
  "products/products_loading"
);

export const loadBrands = createAction("products/load_brands");
export const setBrands = createAction<string[]>("products/set_brands");
export const setLoadingBrands = createAction<LoadingStatus>(
  "products/brands_loading"
);

export const loadProductTypes = createAction("products/load_product_types");
export const setProductTypes = createAction<string[]>(
  "products/set_product_types"
);
export const setLoadingProductTypes = createAction<LoadingStatus>(
  "products/product_types_loading"
);

export const loadTags = createAction("products/load_tags");
export const setTags = createAction<string[]>("products/set_tags");
export const setLoadingTags = createAction<LoadingStatus>(
  "products/tags_loading"
);

export const setProductCount = createAction<number>(
  "products/set_total_products"
);

const productsReducer = createReducer(initialState, builder => {
  builder
    .addCase(setFilters, (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    })
    .addCase(setProducts, (state, action) => {
      state.data = action.payload;
    })

    .addCase(setProductCount, (state, action) => {
      state.productCount = action.payload;
    })

    .addCase(setLoadingProducts, (state, action) => {
      state.status = action.payload;
    })

    .addCase(setLoadingBrands, (state, action) => {
      state.brands.status = action.payload;
    })

    .addCase(setLoadingTags, (state, action) => {
      state.tags.status = action.payload;
    })

    .addCase(setLoadingProductTypes, (state, action) => {
      state.productTypes.status = action.payload;
    })

    .addCase(setBrands, (state, action) => {
      state.brands.data = action.payload;
    })

    .addCase(setTags, (state, action) => {
      state.tags.data = action.payload;
    })

    .addCase(setProductTypes, (state, action) => {
      state.productTypes.data = action.payload;
    });
});

const productsSlice = {
  reducer: productsReducer,
  actions: {
    setFilters,
    loadProducts,
    setProducts,
    setLoadingProducts,
  },
};

export default productsSlice;
