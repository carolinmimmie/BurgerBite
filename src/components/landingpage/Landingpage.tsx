import React from "react";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  let navigation = useNavigate();

  const handleClick = () => {
    navigation("/MainMenu");
  };

  return (
    <div className="landingpage-container" onClick={handleClick}>
      <img
        className="logo"
        src="https://www.thebigkahuna.gr/images/parallax/logobigkahuna.png"
        alt=""
      />
      <h6 className="landingpage-text">
Click here to order</h6>
    </div>
  );
};

export default Landingpage;
