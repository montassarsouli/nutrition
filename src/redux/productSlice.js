import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addproduct: (state, action) => {
      console.log(state.products);
      // state.cart.push(action.payload);
      state.products = [...state.products, action.payload.product];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[index] = action.payload;
    },
  },
});

export const { addproduct, removeProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
