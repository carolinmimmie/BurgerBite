import { IMenu } from "../../../interfaces";
import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import Context from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PermanentDrawerRight from "../../header/Cart";
import Soda from "./Soda";
import Shakes from "./Shakes";
import Smoothie from "./Smoothie";
const Drinks = () => {
  const { productList } = useContext(Context);

  const sodas = productList
    .filter((x) => x.category === "Drinks" && x.subcategory === "Soda")
    .map((x) => <Soda sodas={x}></Soda>);

  const shakes = productList
    .filter((x) => x.category === "Drinks" && x.subcategory === "Shakes")
    .map((x) => <Shakes shakes={x}></Shakes>);

  const smoothies = productList
    .filter((x) => x.category === "Drinks" && x.subcategory === "Smoothies")
    .map((x) => <Smoothie smoothies={x}></Smoothie>);

  return (
    <div>
      <PermanentDrawerRight></PermanentDrawerRight>
      <div className="cards-container">
        <div className="button-container">
          <button>
            <HashLink className="links" smooth to="#Sodas">
              Sodas
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#Shakes">
              Shakes
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#Smoothies">
              Smoothies
            </HashLink>
          </button>
        </div>

        <div className="title"></div>
        <div className="center">
          <h3 id="Sodas" className="category-text">
            Sodas
          </h3>
          <div className="menu-container">{sodas}</div>

          <h3 id="Shakes" className="category-text">
            Shakes
          </h3>
          <div className="menu-container">{shakes}</div>
          <h3 id="Smoothies" className="category-text">
            Smoothies
          </h3>
          <div className="menu-container">{smoothies}</div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
