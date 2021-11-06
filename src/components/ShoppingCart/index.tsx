import React from "react";
import * as Popover from "@radix-ui/react-popover";

import { BasketIcon } from "@/icons";
import {
  Content,
  ViewCartButton,
  PriceText,
  EmptyBasket,
  Seperator,
  CheckoutButton,
} from "./styles";
import Product from "./Product";

type Product = {
  name: string;
  price: number;
  amount: number;
};

type Props = {
  items: Product[];
};

const ShoppingCart = ({ items }: Props) => {
  const totalCost = items.reduce((prev, curr) => prev + curr.price, 0);
  const totalCostText = new Intl.NumberFormat("tr", {
    maximumFractionDigits: 2,
  }).format(totalCost);

  return (
    <Popover.Root>
      <ViewCartButton>
        <BasketIcon className="icon" />
        <PriceText>₺ {totalCostText}</PriceText>
      </ViewCartButton>

      <Content side="bottom" sideOffset={40} align="end">
        {items.length === 0 && <EmptyBasket>Your basket is empty!</EmptyBasket>}

        {items.map(item => (
          <>
            <Product
              key={item.name}
              name={item.name}
              price={item.price}
              amount={item.amount}
              increment={() => console.log("inc")}
              decrement={() => console.log("dec")}
            />

            <Seperator />
          </>
        ))}

        {items.length > 0 && <CheckoutButton>₺{totalCostText}</CheckoutButton>}
      </Content>
    </Popover.Root>
  );
};

export default ShoppingCart;
