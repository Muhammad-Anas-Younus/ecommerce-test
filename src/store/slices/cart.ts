import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../api/products/use-get-products";

interface IProductExtended extends IProduct {
  quantity: number;
}

const initialState: {
  products: IProductExtended[];
  totalPrice: number;
} = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action: { payload: IProductExtended }) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity +=
          action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      state.totalPrice = state.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
