import { useState, useEffect } from "react";
import styled from "styled-components";

import { breakpoints, colors } from "@/theme";
import { Grid } from "..";
import ToggleGroup from "./ToggleGroup";

import Product from "../Product";
import Pagination from "../Pagination";
import { addItem, removeItem } from "../ShoppingCart/shoppingCartSlice";
import FilterBox from "../FilterBox";
import useProduct from "./useProduct";
import Sortbox from "../Sortbox";

type Props = {
  title: string;
};

const ProductList = ({ title }: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  const {
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
  } = useProduct();

  useEffect(() => {
    setBrands(productsState.brands.data);
  }, [productsState.brands.data]);

  useEffect(() => {
    setTags(productsState.tags.data);
  }, [productsState.tags.data]);

  return (
    <Grid>
      <FilterWrapper>
        <Sortbox title="Sorting" defaultOption="price_asc" onChange={onSortProducts} />

        <FilterBox
          title="Brands"
          placeholder="Search brands"
          options={["All", ...brands]}
          defaultOptions={["All"]}
          onSearch={value =>
            setBrands(
              productsState.brands.data.filter(x =>
                x.toLowerCase().includes(value)
              )
            )
          }
          onChange={onFilterBrands}
        />

        <FilterBox
          title="Tags"
          placeholder="Search tags"
          options={["All", ...tags]}
          defaultOptions={["All"]}
          onSearch={value =>
            setTags(
              productsState.tags.data.filter(x =>
                x.toLowerCase().includes(value)
              )
            )
          }
          onChange={onFilterTags}
        />
      </FilterWrapper>

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
  margin-top: 38px;

  grid-column: 2 / -2;

  @media ${breakpoints.md} {
    margin-top: 38px;
  }

  @media ${breakpoints.lg} {
    grid-column: 5 / span 6;
  }

  @media ${breakpoints.xl} {
    grid-column: 4 / span 6;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 38px;

  grid-column: 2 / -2;

  @media ${breakpoints.lg} {
    grid-column: 2 / span 3;
  }

  @media ${breakpoints.xl} {
    grid-column: 1 / span 3;
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
