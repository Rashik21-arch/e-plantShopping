
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../features/CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.cost * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-details">
                <h3>{item.name}</h3>

                <p>Unit Price: ₹{item.cost}</p>

                <p>
                  Total: ₹{item.cost * item.quantity}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h2>Grand Total: ₹{totalAmount}</h2>

            <button
              className="checkout-button"
              onClick={() => alert("Checkout Coming Soon!")}
            >
              Checkout
            </button>

            <button
              className="continue-button"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
