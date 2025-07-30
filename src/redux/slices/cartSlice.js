
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [], 
  orders: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) item.quantity = quantity;
    },
    clearCart: (state) => {
      state.items = [];
    },
     placeOrder: (state, action) => {
      const newOrder = {
        id: nanoid(), 
        ...action.payload,
        date: new Date().toLocaleString(),
      };
      state.orders.push(newOrder);
    },
  
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity,clearCart,placeOrder}=cartSlice.actions;

export default cartSlice.reducer;
