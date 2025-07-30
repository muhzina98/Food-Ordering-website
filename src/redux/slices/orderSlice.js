import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      state.orders.push({
        id: Date.now(),
        items: action.payload.items,
        total: action.payload.total,
        date: new Date().toLocaleString(),
      });
    },
    clearOrders: (state) => {
      state.orders = [];
    }
  }
});

export const { placeOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
