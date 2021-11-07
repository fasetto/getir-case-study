import { Product } from "@/types";
import { createAction, createReducer } from "@reduxjs/toolkit";

type BasketItem = {
  item: Product;
  amount: number;
};

type ShoppingCartState = {
  items: BasketItem[];
};

const initialState: ShoppingCartState = {
  items: [],
};

export const setItems = createAction<BasketItem[]>("shopping_card/set_items");

export const addItem = createAction<Product>("shopping_card/add_item");
export const removeItem = createAction<Product>("shopping_card/remove_item");
export const incrementAmount = createAction<Product>(
  "shopping_card/increment_amount"
);
export const decrementAmount = createAction<Product>(
  "shopping_card/decrement_amount"
);

const shoppingCardReducer = createReducer(initialState, builder => {
  builder
    .addCase(setItems, (state, action) => {
      state.items = action.payload;
    })
    .addCase(addItem, (state, action) => {
      state.items.push({
        amount: 1,
        item: action.payload,
      });
    })
    .addCase(incrementAmount, (state, action) => {
      const item = state.items.find(x => x.item.slug === action.payload.slug);
      if (item) item.amount++;
    })
    .addCase(decrementAmount, (state, action) => {
      const item = state.items.find(x => x.item.slug === action.payload.slug);

      // Delete the item if there is only one
      if (item?.amount === 1) {
        state.items = state.items.filter(
          x => x.item.slug !== action.payload.slug
        );
        return;
      }

      if (item) item.amount--;
    })
    .addCase(removeItem, (state, action) => {
      state.items = state.items.filter(
        x => x.item.slug !== action.payload.slug
      );
    });
});

const shoppingCartSlice = {
  reducer: shoppingCardReducer,
  actions: {
    setItems,
    addItem,
    removeItem,
  },
};

export default shoppingCartSlice;
