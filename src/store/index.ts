import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./rootSaga";
import productsSlice from "@/components/ProductList/productsSlice";
import shoppingCartSlice from "@/components/ShoppingCart/shoppingCartSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
