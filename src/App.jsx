
import React, { useState } from "react";
import { useSelector } from "react-redux";

import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [showProductList, setShowProductList] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setPage("plants");
  };

  const handleHome = () => {
    setShowProductList(false);
    setPage("home");
  };

  const handlePlants = () => {
    setShowProductList(true);
    setPage("plants");
  };

  const handleCart = () => {
    setPage("cart");
  };

  return (
    <div className="app-container">

      {page === "home" && (
        <>
          <Navbar
            cartCount={cartCount}
            onHome={handleHome}
            onPlants={handlePlants}
            onCart={handleCart}
          />

          <h1 className="welcome-heading">
            Welcome to Paradise Nursery
          </h1>

          <LandingPage onGetStarted={handleGetStartedClick} />
          <AboutUs />
        </>
      )}

      {page === "plants" && showProductList && (
        <ProductList
          onHome={handleHome}
          onPlants={handlePlants}
          onCart={handleCart}
        />
      )}

      {page === "cart" && (
        <CartItem
          onHome={handleHome}
          onPlants={handlePlants}
          onCart={handleCart}
          onContinueShopping={handlePlants}
        />
      )}

    </div>
  );
}

export default App;
