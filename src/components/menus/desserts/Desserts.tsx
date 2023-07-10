import { IMenu } from "../../../interfaces";
import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import Context from "../../../context/Context";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PermanentDrawerRight from "../../header/Cart";
import Sweets from "./Sweets";
import Coffee from "./Coffee";
import Tea from "./Tea";

const Drinks = () => {
  const { productList } = useContext(Context);

  const sweets = productList
    .filter((x) => x.category === "Desserts" && x.subcategory === "Sweets")
    .map((x) => <Sweets sweets={x}></Sweets>);

  const coffee = productList
    .filter((x) => x.category === "Desserts" && x.subcategory === "Coffee")
    .map((x) => <Coffee coffee={x}></Coffee>);

  const tea = productList
    .filter((x) => x.category === "Desserts" && x.subcategory === "Tea")
    .map((x) => <Tea tea={x}></Tea>);

  return (
    <div>
      <PermanentDrawerRight></PermanentDrawerRight>
      <div className="cards-container">
        <div className="button-container">
          <button>
            <HashLink className="links" smooth to="#Sweets">
              Sweets
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#Coffee">
              Coffee
            </HashLink>
          </button>
          <button>
            <HashLink className="links" smooth to="#Tea">
              Tea
            </HashLink>
          </button>
        </div>

        <div className="title"></div>
        <div className="center">
          <h3 id="Sweets" className="category-text">
            Sweets
          </h3>
          <div className="menu-container">{sweets}</div>

          <h3 id="Coffee" className="category-text">
            Coffee
          </h3>
          <div className="menu-container">{coffee}</div>
          <h3 id="Tea" className="category-text">
            Tea
          </h3>
          <div className="menu-container">{tea}</div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
