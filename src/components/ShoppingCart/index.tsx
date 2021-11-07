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
import BasketItem from "./BasketItem";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Product } from "@/types";
import { decrementAmount, incrementAmount } from "./shoppingCartSlice";

type BasketItem = {
  name: string;
  price: number;
  amount: number;
};

const ShoppingCart = () => {
  const shoppingCart = useAppSelector(s => s.shoppingCart);
  const dispatch = useAppDispatch();

  const totalCost = shoppingCart.items.reduce(
    (prev, curr) => prev + curr.item.price * curr.amount,
    0
  );

  const totalCostText = new Intl.NumberFormat("tr", {
    maximumFractionDigits: 2,
  }).format(totalCost);

  const increment = (item: Product) => {
    dispatch(incrementAmount(item));
  };

  const decrement = (item: Product) => {
    dispatch(decrementAmount(item));
  };

  return (
    <Popover.Root>
      <ViewCartButton>
        <BasketIcon className="icon" />
        <PriceText>₺ {totalCostText}</PriceText>
      </ViewCartButton>

      <Content side="bottom" sideOffset={40} align="end">
        {shoppingCart.items.length === 0 && (
          <EmptyBasket>Your basket is empty!</EmptyBasket>
        )}

        {shoppingCart.items.map(basketItem => (
          <React.Fragment key={basketItem.item.slug}>
            <BasketItem
              name={basketItem.item.name}
              price={basketItem.item.price * basketItem.amount}
              amount={basketItem.amount}
              increment={() => increment(basketItem.item)}
              decrement={() => decrement(basketItem.item)}
            />

            <Seperator />
          </React.Fragment>
        ))}

        {shoppingCart.items.length > 0 && (
          <CheckoutButton>₺{totalCostText}</CheckoutButton>
        )}
      </Content>
    </Popover.Root>
  );
};

export default ShoppingCart;
