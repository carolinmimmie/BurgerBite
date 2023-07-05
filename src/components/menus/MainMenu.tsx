import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import PermanentDrawerRight from "../shoppingcart/Cart";

const MainMenu = () => {
  let navigationMeals = useNavigate();
  const handleClickMeals = () => {
    navigationMeals("/Meals");
  };

  let navigationMiniMeals = useNavigate();
  const handleClickMiniMeals = () => {
    navigationMiniMeals("/MiniMeals");
  };

  let navigationBurgers = useNavigate();
  const handleClickBurgers = () => {
    navigationBurgers("/Burgers");
  };

  let navigationAddons = useNavigate();
  const handleClickAddons = () => {
    navigationAddons("/Snacks");
  };

  let navigationDrinks = useNavigate();
  const handleClickDrinks = () => {
    navigationDrinks("/Drinks");
  };

  let navigationDesserts = useNavigate();
  const handleClickDesserts = () => {
    navigationDesserts("/Desserts");
  };

  return (
    <div className="container">
      {/* <AppBar></AppBar> */}
      <PermanentDrawerRight></PermanentDrawerRight>
      <div className="menu-container">
        <div className="hero-conatiner">
          <div className="menuhero-one" onClick={handleClickMeals}>
            <div className="menuhero-text">Meals</div>
          </div>

          <div className="menuhero-two" onClick={handleClickMiniMeals}>
            <div className="menuhero-text">Mini Meals</div>
          </div>
        </div>

        <div className="hero-conatiner">
          <div className="menuhero-three" onClick={handleClickBurgers}>
            <div className="menuhero-text">Burgers</div>
          </div>

          <div className="menuhero-four" onClick={handleClickAddons}>
            <div className="menuhero-text">Snacks</div>
          </div>
        </div>

        <div className="hero-conatiner">
          <div className="menuhero-five" onClick={handleClickDrinks}>
            <div className="menuhero-text">Drinks</div>
          </div>

          <div className="menuhero-six" onClick={handleClickDesserts}>
            <div className="menuhero-text">Desserts</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainMenu;
