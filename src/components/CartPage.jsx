import React, { useState, useEffect } from 'react';

const CartPage = ({ cartItems, updateQuantity, removeItem, clearCart }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border p-4 rounded shadow">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeItem(item.id)} className="text-red-500">Remove</button>
              </div>
            </div>
          ))}

          <div className="text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>

          <button onClick={handleCheckout} className="bg-blue-600 text-white px-4 py-2 rounded">
            Checkout
          </button>
        </div>
      )}

      {/* Popup */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500">
          Order placed successfully!
        </div>
      )}
    </div>
  );
};

export default CartPage;
