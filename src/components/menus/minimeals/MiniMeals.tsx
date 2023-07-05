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
import PermanentDrawerRight from "../../shoppingcart/Cart";
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
      <div className="bg">
        <section className="border">
          <button>
            <HashLink smooth to="#MeatMiniMeals">
              kött
            </HashLink>
          </button>
          <button>
            <HashLink smooth to="#ChickenMiniMeals">
              kyckling
            </HashLink>
          </button>
          <button>
            <HashLink smooth to="#FishMiniMeals">
              fisk
            </HashLink>
          </button>
          <button>
            <HashLink smooth to="#VegetarianMiniMeals">
              veg
            </HashLink>
          </button>

          <div className="title"></div>
          <div className="center">
            <h3 id="MeatMiniMeals">Meat MiniMeals</h3>
            <div className="lib-books-container">{meatMiniMeals}</div>
            <h3 id="ChickenMiniMeals">Chicken MiniMeals</h3>
            <div className="lib-books-container">{chickenMiniMeals}</div>
            <h3 id="FishMiniMeals">Fish MiniMeals</h3>
            <div className="lib-books-container">{fishMiniMeals}</div>
            <h3 id="VegetarianMiniMeals">Vegetarian MiniMeals</h3>
            <div className="lib-books-container">{vegetarianMiniMeals}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MiniMeals;
