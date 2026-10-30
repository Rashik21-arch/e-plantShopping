
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../features/CartSlice";

function CartItem({
  onHome,
  onPlants,
  onCart,
  onContinueShopping,
}) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
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

      <nav className="navbar">
        <h2 onClick={onHome}>🌿 Paradise Nursery</h2>

        <div className="nav-links">
          <button onClick={onHome}>Home</button>
          <button onClick={onPlants}>Plants</button>
          <button onClick={onCart}>
            🛒 Cart ({cartCount})
          </button>
        </div>
      </nav>

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
                className="cart-item-image"
                src={item.image}
                alt={item.name}
              />

              <div className="cart-details">

                <h3 className="cart-item-name">
                  {item.name}
                </h3>

                <p className="cart-item-price">
                  Unit Price: ₹{item.cost}
                </p>

                <p className="cart-item-total">
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
              className="get-started-button1"
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
