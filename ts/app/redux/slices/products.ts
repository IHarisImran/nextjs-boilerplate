import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import type { Product } from "@/app/types";

type ProductState = Product[] | null;

const productsSlice = createSlice({
    name: "products",
    initialState: null as ProductState,
    reducers: {
        setProducts(state, action: PayloadAction<ProductState>) { return action.payload }
    }
});

export default productsSlice.reducer;
const { setProducts } = productsSlice.actions;

export function useProducts() {
    const dispatch = useDispatch<AppDispatch>(),
        setProductsState = (data: ProductState) => dispatch(setProducts(data)),
        getProductState = useSelector((state: RootState) => state.products);
    return { setProductsState, getProductState };
};