import { useEffect } from "react";
import styled from "styled-components";

import { breakpoints, colors } from "@/theme";
import { Grid } from "..";
import ToggleGroup from "./ToggleGroup";

import { fetchProductsAction, filterByType } from "./productsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import QueryBuilder from "@/utils/QueryBuilder";

type Props = {
  title: string;
};

const ProductList = ({ title }: Props) => {
  const productsState = useAppSelector(s => s.products);
  const filterState = productsState.filters;
  const productTypes = productsState.productTypes;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  const onProductTypeChange = (value: string) => {
    if (value === "") return;

    dispatch(filterByType(value));
  };

  return (
    <Grid>
      <Wrapper>
        <Title>{title}</Title>

        {productsState.status === "success" && (
          <>
            <ToggleGroup
              items={productTypes}
              value={filterState.type}
              onChange={onProductTypeChange}
            />
            <ProductListWrapper></ProductListWrapper>
          </>
        )}

        {productsState.status === "loading" && (
          <>
            <ToggleGroup.Skeleton />
          </>
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
