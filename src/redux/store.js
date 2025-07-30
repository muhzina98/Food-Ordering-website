import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
import orderReducer from'./slices/orderSlice';
import dishReducer from './slices/dishSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
    dishes: dishReducer

  },
});

export default store;

