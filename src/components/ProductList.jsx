
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/CartSlice";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      { name: "Snake Plant", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500", cost: 299 },
      { name: "Peace Lily", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500", cost: 399 },
      { name: "Areca Palm", image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500", cost: 499 },
      { name: "Spider Plant", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500", cost: 249 },
      { name: "Rubber Plant", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500", cost: 599 },
      { name: "Boston Fern", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500", cost: 349 }
    ]
  },
  {
    category: "Aromatic Plants",
    plants: [
      { name: "Lavender", image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500", cost: 299 },
      { name: "Jasmine", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500", cost: 249 },
      { name: "Rosemary", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=500", cost: 199 },
      { name: "Mint", image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=500", cost: 149 },
      { name: "Lemon Balm", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500", cost: 229 },
      { name: "Thyme", image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=500", cost: 179 }
    ]
  },
  {
    category: "Succulents",
    plants: [
      { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500", cost: 199 },
      { name: "Echeveria", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500", cost: 249 },
      { name: "Jade Plant", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500", cost: 299 },
      { name: "Haworthia", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500", cost: 199 },
      { name: "Zebra Plant", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500", cost: 279 },
      { name: "String of Pearls", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500", cost: 349 }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      id: plant.name,
      name: plant.name,
      image: plant.image,
      cost: plant.cost,
      price: plant.cost
    }));

    setAddedToCart((previous) => ({
      ...previous,
      [plant.name]: true
    }));
  };

  return (
    <div className="product-page">
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#plants">Plants</a>
          <a href="#cart">🛒 Cart ({cartCount})</a>
        </div>
      </nav>

      <div id="plants">
        <h1>Our Beautiful Houseplants</h1>
        <p className="product-subtitle">
          Find the perfect green companion for your home.
        </p>

        {plantsArray.map((category, index) => (
          <section className="plant-category" key={index}>
            <h2>{category.category}</h2>

            <div className="product-grid">
              {category.plants.map((plant) => (
                <div className="product-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <h4>₹{plant.cost}</h4>

                  <button
                    disabled={addedToCart[plant.name]}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedToCart[plant.name]
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
