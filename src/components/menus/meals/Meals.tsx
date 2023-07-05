import { IMenu } from "../../../interfaces";
import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import Context from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import VegetarianMeals from "./VegetarianMeals";
import FishMeals from "./FishMeals";
import ChickenMeals from "./ChickenMeals";
import MeatMeals from "./MeatMeals";
import PermanentDrawerRight from "../../shoppingcart/Cart";
const Meals = () => {
  const { productList } = useContext(Context);

  const meatMeals = productList
    .filter((x) => x.category === "Meals" && x.subcategory === "Meat")
    .map((x) => <MeatMeals meatMeals={x}></MeatMeals>);

  const chickenMeals = productList
    .filter((x) => x.category === "Meals" && x.subcategory === "Chicken")
    .map((x) => <ChickenMeals chickenMeals={x}></ChickenMeals>);

  const fishMeals = productList
    .filter((x) => x.category === "Meals" && x.subcategory === "Fish")
    .map((x) => <FishMeals fishMeals={x}></FishMeals>);

  const vegetarianMeals = productList
    .filter((x) => x.category === "Meals" && x.subcategory === "Vegetarian")
    .map((x) => <VegetarianMeals vegetarianMeals={x}></VegetarianMeals>);

  return (
    <div>
      <PermanentDrawerRight></PermanentDrawerRight>
      <div className="cards-container">
      <div className="button-container">
          <button>
            <HashLink className="links" smooth to="#MeatMeals">
              kött
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#ChickenMeals">
              kyckling
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#FishMeals">
              fisk
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#VegetarianMeals">
              veg
            </HashLink>
          </button>
          </div>
          <div className="title"></div>
          <div className="center">
            <h3 id="MeatMeals" className="category-text">
              MeatMeals
            </h3>
            <div className="items-container">{meatMeals}</div>
            <h3 id="ChickenMeals" className="category-text">
              ChickenMeals
            </h3>
            <div className="items-container">{chickenMeals}</div>
            <h3 id="FishMeals" className="category-text">
              FishMeals
            </h3>
            <div className="items-container">{fishMeals}</div>
            <h3 id="VegetarianMeals" className="category-text">
              VegetarianMeals
            </h3>
            <div className="items-container">{vegetarianMeals}</div>
          </div>
   
      </div>
    </div>
  );
};

export default Meals;
