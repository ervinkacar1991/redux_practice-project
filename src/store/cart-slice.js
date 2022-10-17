import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existing = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existing) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          // totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existing.quantity++;
        // existing.totalPrice = totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existing.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existing.quantity--;
        // existing.totalPrice = existing.totalPrice - existing.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
