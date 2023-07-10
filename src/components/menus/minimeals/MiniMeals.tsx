import { IMenu } from "../../../interfaces";
import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import Context from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import FishMiniMeals from "./FishMiniMeals";
import ChickenMiniMeals from "./ChickenMiniMeals";
import MeatMiniMeals from "./MeatMiniMeals";
import VegetarianMiniMeals from "./VegetarianMiniMeals";
import PermanentDrawerRight from "../../header/Cart";
const MiniMeals = () => {
  const { productList } = useContext(Context);

  const meatMiniMeals = productList
    .filter((x) => x.category === "Minimeals" && x.subcategory === "Meat")
    .map((x) => <MeatMiniMeals meatMiniMeals={x}></MeatMiniMeals>);

  const chickenMiniMeals = productList
    .filter((x) => x.category === "Meals" && x.subcategory === "Chicken")
    .map((x) => <ChickenMiniMeals chickenMiniMeals={x}></ChickenMiniMeals>);

  const fishMiniMeals = productList
    .filter((x) => x.category === "Meals" && x.subcategory === "Fish")
    .map((x) => <FishMiniMeals fishMiniMeals={x}></FishMiniMeals>);

  const vegetarianMiniMeals = productList
    .filter((x) => x.category === "Meals" && x.subcategory === "Vegetarian")
    .map((x) => (
      <VegetarianMiniMeals vegetarianMiniMeals={x}></VegetarianMiniMeals>
    ));

  return (
    <div>
      <PermanentDrawerRight></PermanentDrawerRight>
      <div className="cards-container">
        <div className="button-container">
          <button>
            <HashLink className="links" smooth to="#MeatMiniMeals">
              Meat
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#ChickenMiniMeals">
              Chicken
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#FishMiniMeals">
              Fish
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#VegetarianMiniMeals">
              Vegetarian
            </HashLink>
          </button>
        </div>

        <div className="title"></div>
        <div className="center">
          <h3 id="MeatMiniMeals" className="category-text">
            Meat MiniMeals
          </h3>
          <div className="menu-container">{meatMiniMeals}</div>
          <h3 id="ChickenMiniMeals" className="category-text">
            Chicken MiniMeals
          </h3>
          <div className="menu-container">{chickenMiniMeals}</div>
          <h3 id="FishMiniMeals" className="category-text">
            Fish MiniMeals
          </h3>
          <div className="menu-container">{fishMiniMeals}</div>
          <h3 id="VegetarianMiniMeals" className="category-text">
            Vegetarian MiniMeals
          </h3>
          <div className="menu-container">{vegetarianMiniMeals}</div>
        </div>
      </div>
    </div>
  );
};

export default MiniMeals;
