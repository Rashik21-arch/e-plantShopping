
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/CartSlice";
import plants from "../data/plants";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-page">
      <h1>Our Beautiful Houseplants</h1>
      <p className="product-subtitle">
        Find the perfect green companion for your home.
      </p>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category} Plants</h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const alreadyAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />

                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <h4>₹{plant.price}</h4>

                    <button
                      disabled={alreadyAdded}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {alreadyAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
