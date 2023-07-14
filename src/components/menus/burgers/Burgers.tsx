import React, { useContext, useEffect, useState } from "react";
import Context from "../../../context/Context";
import ChickenBurgers from "./ChickenBurgers";
import MeatBurgers from "./MeatBurgers";
import FishBurgers from "./FishBurgers";
import VegetarianBurgers from "./VegetarianBurgers";
import { HashLink } from "react-router-hash-link";
import PermanentDrawerRight from "../../header/Cart";
const Burgers = () => {
  const { productList } = useContext(Context);

  const meatBurgers = productList
    .filter((x) => x.category === "Burgers" && x.subcategory === "Meat")
    .map((x) => <MeatBurgers meatBurgers={x}></MeatBurgers>);

  const chickenBurgers = productList
    .filter((x) => x.category === "Burgers" && x.subcategory === "Chicken")
    .map((x) => <ChickenBurgers chickenBurgers={x}></ChickenBurgers>);

  const fishBurgers = productList
    .filter((x) => x.category === "Burgers" && x.subcategory === "Fish")
    .map((x) => <FishBurgers fishBurgers={x}></FishBurgers>);

  const vegetarianBurgers = productList
    .filter((x) => x.category === "Burgers" && x.subcategory === "Vegetarian")
    .map((x) => <VegetarianBurgers vegetarianBurgers={x}></VegetarianBurgers>);

  return (
    <div>
      <PermanentDrawerRight></PermanentDrawerRight>
      <div className="cards-container">
        <div className="button-container">
          <button>
            <HashLink className="links" smooth to="#MeatBurgers">
              Meat
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#ChickenBurgers">
              Chicken
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#FishBurgers">
              Fish
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#VegetarianBurgers">
              Vegetarian
            </HashLink>
          </button>
        </div>

        <div className="title"></div>
        <div className="center">
          <h3 id="MeatBurgers" className="category-text">
            MeatBurgers
          </h3>
          <div className="menu-container">{meatBurgers}</div>
          <h3 id="ChickenBurgers" className="category-text">
            ChickenBurgers
          </h3>
          <div className="menu-container">{chickenBurgers}</div>
          <h3 id="FishBurgers" className="category-text">
            FishBurgers
          </h3>
          <div className="menu-container">{fishBurgers}</div>
          <h3 id="VegetarianBurgers" className="category-text">
            VegetarianBurgers
          </h3>
          <div className="menu-container">{vegetarianBurgers}</div>
        </div>
      </div>
    </div>
  );
};

export default Burgers;
