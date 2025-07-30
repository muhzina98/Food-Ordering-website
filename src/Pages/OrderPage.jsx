import React from 'react';
import { useSelector } from 'react-redux';

const OrderPage = () => {
  const orders = useSelector(state => state.cart.orders);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="border p-4 mb-4 shadow rounded">
            <p className="font-bold">Order ID: {order.id}</p>
            <p>Date: {order.date}</p>
            <ul className="list-disc pl-6 mt-2">
              {order.items.map(item => (
                <li key={item.id}>
                  {item.name} × {item.quantity} — ₹{item.price * item.quantity}
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">Total: ₹{order.total}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderPage;
