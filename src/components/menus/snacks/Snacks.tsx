import { IMenu } from "../../../interfaces";
import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import Context from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PermanentDrawerRight from "../../header/Cart";
import Sides from "./Sides";
import Dips from "./Dips";
const Snacks = () => {
  const { productList } = useContext(Context);

  const sides = productList
    .filter((x) => x.category === "Snacks" && x.subcategory === "Sides")
    .map((x) => <Sides sides={x}></Sides>);

  const dips = productList
    .filter((x) => x.category === "Snacks" && x.subcategory === "Dips")
    .map((x) => <Dips dips={x}></Dips>);

  return (
    <div>
      <PermanentDrawerRight></PermanentDrawerRight>
      <div className="cards-container">
        <div className="button-container">
          <button>
            <HashLink className="links" smooth to="#MeatMeals">
              Sides
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#ChickenMeals">
              Dips
            </HashLink>
          </button>
        </div>
        <div className="title"></div>
        <div className="center">
          <h3 id="MeatMeals" className="category-text">
            Sides
          </h3>
          <div className="menu-container">{sides}</div>
          <h3 id="ChickenMeals" className="category-text">
            Dips
          </h3>
          <div className="menu-container">{dips}</div>
        </div>
      </div>
    </div>
  );
};

export default Snacks;
