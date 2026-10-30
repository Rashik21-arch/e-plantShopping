
import React from "react";

function Navbar({ cartCount, onHome, onPlants, onCart }) {
  return (
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
  );
}

export default Navbar;
