import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const productsSlice = createSlice({
    name: "products",
    initialState: null,
    reducers: {
        setProducts(state, action) { return action.payload }
    }
});

export default productsSlice.reducer;
const { setProducts } = productsSlice.actions;

export function useProducts() {
    const dispatch = useDispatch(),
        setProductsState = data => dispatch(setProducts(data));
    return { setProductsState };
};