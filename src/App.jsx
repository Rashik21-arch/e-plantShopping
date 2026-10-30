
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

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      {page !== "home" && (
        <Navbar
          cartCount={cartCount}
          onHome={() => setPage("home")}
          onPlants={() => setPage("plants")}
          onCart={() => setPage("cart")}
        />
      )}

      {page === "home" && (
        <>
          <LandingPage onGetStarted={() => setPage("plants")} />
          <AboutUs />
        </>
      )}

      {page === "plants" && <ProductList />}

      {page === "cart" && (
        <CartItem onContinueShopping={() => setPage("plants")} />
      )}
    </div>
  );
}

export default App;
