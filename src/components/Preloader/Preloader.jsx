import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__spinner"></div>
      <p>Fetching Recipes...</p>
    </div>
  );
};

export default Preloader;
