import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './slices/products';

const store = configureStore({
    reducer: {
        products: productsSlice,
    },
    devTools: false
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;