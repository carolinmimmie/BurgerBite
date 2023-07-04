import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  let navigation = useNavigate();

  const handleClick = () => {
    navigation("/MainMenu");
  };
  return (
    <div className="hero-container">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Skeleton Burgers</h1>
          <button className="hero-button" onClick={handleClick}>
         Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
