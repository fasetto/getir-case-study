import { useEffect } from "react";
import styled from "styled-components";

import { breakpoints, colors } from "@/theme";
import { Grid } from "..";
import ToggleGroup from "./ToggleGroup";

import {
  loadBrands,
  loadProducts,
  loadProductTypes,
  setFilters,
} from "./productsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Product from "../Product";
import Pagination from "../Pagination";
import { addItem, removeItem } from "../ShoppingCart/shoppingCartSlice";

type Props = {
  title: string;
};

const ProductList = ({ title }: Props) => {
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
    dispatch(loadProductTypes());
  }, [dispatch]);

  const onProductTypeChange = (value: string) => {
    if (value === "") return;

    dispatch(setFilters({ productType: value }));
  };

  const onPageChange = (page: number) => {
    dispatch(setFilters({ pagination: { currentPage: page } }));
  };

  return (
    <Grid>
      <Wrapper>
        <Title>{title}</Title>

        {productTypes.status === "success" && (
          <ToggleGroup
            items={productTypes.data}
            value={productFilters.productType || ""}
            onChange={onProductTypeChange}
          />
        )}

        {productsState.status === "success" && (
          <ProductListWrapper>
            {products.map(item => (
              <Product
                key={item.slug}
                image={item.image}
                name={item.name}
                price={item.price}
                isInBasket={
                  shoppingCart.items.filter(x => x.item.slug === item.slug)
                    .length > 0
                }
                onAddedToBasket={() => dispatch(addItem(item))}
                onRemovedFromBasket={() => dispatch(removeItem(item))}
              />
            ))}
          </ProductListWrapper>
        )}

        {productTypes.status === "loading" && <ToggleGroup.Skeleton />}

        {productsState.status === "loading" && (
          <ProductListWrapper>
            {Array.from({ length: 6 }).map((_, i) => (
              <Product.Skeleton key={`skeleton-${i}`} />
            ))}
          </ProductListWrapper>
        )}

        {productsState.productCount !== 0 && (
          <Pagination onPageChange={onPageChange} pageCount={pageCount} />
        )}
      </Wrapper>
    </Grid>
  );
};

export default ProductList;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 28px;

  grid-column: 2 / -2;

  @media ${breakpoints.md} {
    margin-top: 38px;
  }

  @media ${breakpoints.xl} {
    grid-column: 4 / span 6;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: ${colors.gray500};
`;

const ProductListWrapper = styled.div`
  background-color: white;
  box-shadow: 0px 4px 24px 0px #5d3ebc0a;
  border-radius: 2px;
  padding: 20px;
  width: max-content;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 24px;
  row-gap: 20px;

  @media ${breakpoints.sm} {
    grid-template-columns: repeat(3, max-content);
  }

  @media ${breakpoints.md} {
    grid-template-columns: repeat(4, max-content);
  }
`;
