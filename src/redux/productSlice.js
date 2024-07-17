import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  total: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addproduct: (state, action) => {
      // console.log(state.products);
      state.products = [...state.products, action.payload.product];
      state.total += action.payload.product.price;
    },
    removeProduct: (state, action) => {
      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );
      if (productToRemove) {
        state.total -= productToRemove.price; // Adjust total when a product is removed
      }
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.total -= state.products[index].price; // Subtract the old price
        state.total += action.payload.price; // Add the new price
        state.products[index] = action.payload;
      }
    },
  },
});

export const { addproduct, removeProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
