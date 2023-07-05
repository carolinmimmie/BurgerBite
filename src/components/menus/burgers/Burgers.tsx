import React, { useContext, useEffect, useState } from "react";
import Context from "../../../context/Context";
import ChickenBurgers from "./ChickenBurgers";
import MeatBurgers from "./MeatBurgers";
import FishBurgers from "./FishBurgers";
import VegetarianBurgers from "./VegetarianBurgers";
import { HashLink } from "react-router-hash-link";
import PermanentDrawerRight from "../../shoppingcart/Cart";
const Burgers = () => {
  const { productList } = useContext(Context);

  const meatBurgers = productList
    .filter((x) => x.subcategory === "Meat")
    .map((x) => <MeatBurgers meatBurgers={x}></MeatBurgers>);

  const chickenBurgers = productList
    .filter((x) => x.subcategory === "Chicken")
    .map((x) => <ChickenBurgers chickenBurgers={x}></ChickenBurgers>);

  const fishBurgers = productList
    .filter((x) => x.subcategory === "Fish")
    .map((x) => <FishBurgers fishBurgers={x}></FishBurgers>);

  const vegetarianBurgers = productList
    .filter((x) => x.subcategory === "Vegetarian")
    .map((x) => <VegetarianBurgers vegetarianBurgers={x}></VegetarianBurgers>);

  return (
    <div>
      <PermanentDrawerRight></PermanentDrawerRight>
      <div className="cards-container">
        <div className="button-container">
        <button>
          <HashLink smooth to="#MeatBurgers">
            kött
          </HashLink>
        </button>
        <button>
          <HashLink smooth to="#ChickenBurgers">
            kyckling
          </HashLink>
        </button>
        <button>
          <HashLink smooth to="#FishBurgers">
            fisk
          </HashLink>
        </button>
        <button>
          <HashLink smooth to="#VegetarianBurgers">
            veg
          </HashLink>
        </button>
        </div>

        <div className="title"></div>
        <div className="center">
          <h3 id="MeatBurgers">MeatBurgers</h3>
          <div className="lib-books-container">{meatBurgers}</div>
          <h3 id="ChickenBurgers">ChickenBurgers</h3>
          <div className="lib-books-container">{chickenBurgers}</div>
          <h3 id="FishBurgers">FishBurgers</h3>
          <div className="lib-books-container">{fishBurgers}</div>
          <h3 id="VegetarianBurgers">VegetarianBurgers</h3>
          <div className="lib-books-container">{vegetarianBurgers}</div>
        </div>
      </div>
    </div>
  );
};

export default Burgers;
