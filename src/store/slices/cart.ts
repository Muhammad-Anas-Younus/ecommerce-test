import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../api/products/use-get-products";
import toast from "react-hot-toast";

export interface IProductExtended extends IProduct {
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
        toast.success("Product quantity increased");
      } else {
        state.products.push(action.payload);
        toast.success("Product added to cart");
      }

      state.totalPrice = state.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    decrementQuantity: (state, action: { payload: IProduct }) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        if (state.products[productIndex].quantity > 0) {
          state.products[productIndex].quantity -= 1;
        }
        if (state.products[productIndex].quantity === 0) {
          state.products = state.products.filter(
            (product) => product.id !== action.payload.id
          );
        }
      }
      state.totalPrice = state.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      return state;
    },
    removeProductFromCart: (state, action: { payload: IProduct }) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.totalPrice -=
          state.products[productIndex].price *
          state.products[productIndex].quantity;
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
    emptyCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addProductToCart,
  decrementQuantity,
  removeProductFromCart,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
