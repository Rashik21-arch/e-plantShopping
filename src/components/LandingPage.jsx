
import React from "react";

function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <h2>Bring Nature Into Your Home</h2>

          <p>
            Discover beautiful indoor plants and transform
            your living space into a peaceful green paradise.
          </p>

          <button onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
