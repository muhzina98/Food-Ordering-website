import { useSelector, useDispatch } from 'react-redux';
import { clearCart, placeOrder } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    dispatch(placeOrder({ items: cartItems, total: totalAmount }));
    dispatch(clearCart());
    alert('Order placed successfully!');
    navigate('/user-dashboard/order'); 
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      <ul className="mb-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between mb-2">
            <div>{item.name} × {item.quantity}</div>
            <div>₹{item.price * item.quantity}</div>
          </li>
        ))}
      </ul>

      <div className="mb-4 font-semibold">Total: ₹{totalAmount}</div>

      <button
        onClick={handleConfirmOrder}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Confirm & Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
