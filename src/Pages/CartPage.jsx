
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartItemQuantity, clearCart } from '../redux/slices/cartSlice';
import { placeOrder } from '../redux/slices/orderSlice';
import { useNavigate } from 'react-router-dom';


export const CartPage = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };
   const handlePlaceOrder = () => {
    navigate('/user-dashboard/order-summary'); 
  };

  

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <div className="flex items-center mt-2">
                  <label className="mr-2">Qty:</label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 border rounded px-2 py-1"
                  />
                </div>
              </div>
              <button
                className="text-red-600 font-medium hover:underline"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-lg font-bold">Total: ₹{total}</div>

          <div className="mt-4">
            <button
              onClick={handleClear}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
            {cartItems.length > 0 && (
              <button
                onClick={handlePlaceOrder}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              >
                Place Order
              </button>
            )}

          </div>
        </div>
      )}
    </div>
  );
};


