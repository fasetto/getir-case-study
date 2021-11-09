import { useEffect } from "react";

import {
  loadBrands,
  loadProducts,
  loadProductTypes,
  loadTags,
  setFilters,
} from "./productsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { SortOptionType } from "../Sortbox";

const useProduct = () => {
  const shoppingCart = useAppSelector(s => s.shoppingCart);
  const productsState = useAppSelector(s => s.products);

  const products = productsState.data;
  const productFilters = productsState.filters;
  const productTypes = productsState.productTypes;
  const pageCount = Math.ceil(
    productsState.productCount /
      (productFilters?.pagination?.itemsPerPage || 16)
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts(productFilters));
  }, [dispatch, productFilters]);

  useEffect(() => {
    dispatch(loadBrands());
    dispatch(loadTags());
    dispatch(loadProductTypes());
  }, [dispatch]);

  const onProductTypeChange = (value: string) => {
    if (value === "") return;

    dispatch(setFilters({ productType: value }));
  };

  const onPageChange = (page: number) => {
    dispatch(setFilters({ pagination: { currentPage: page } }));
  };

  const onFilterBrands = (brands: string[]) => {
    if (brands.includes("All")) {
      dispatch(setFilters({ brands: [] }));
      return;
    }

    dispatch(setFilters({ brands }));
  };

  const onFilterTags = (tags: string[]) => {
    if (tags.includes("All")) {
      dispatch(setFilters({ tags: [] }));
      return;
    }

    dispatch(setFilters({ tags }));
  };

  const onSortProducts = (option: SortOptionType) => {
    dispatch(setFilters({ sortBy: option }));
  };

  return {
    shoppingCart,
    products,
    productsState,
    productFilters,
    productTypes,
    pageCount,
    onSortProducts,
    onFilterBrands,
    onFilterTags,
    onPageChange,
    onProductTypeChange,
    dispatch,
  };
};

export default useProduct;
