import AppBar from "../../appbar/AppBar";
import { IMenu } from "../../../interfaces";
import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore-config";
import BurgersCard from "./BurgersCard";
import Context from "../../../context/Context";
import ChickenBurgers from "./ChickenBurgers";
import MeatBurgers from "./MeatBurgers";
import FishBurgers from "./FishBurgers";
import VegetarianBurgers from "./VegetarianBurgers";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Burgers = () => {
  const { productList } = useContext(Context);
  // const [burgers, setBurgers] = useState<IMenu[]>([]);
  // const burgersCollectionRef = collection(db, "menu");

  // useEffect(() => {
  //   const getBurgers = async () => {
  //     const data = await getDocs(burgersCollectionRef);

  //     setBurgers(
  //       data.docs.map((doc) => ({ ...(doc.data() as IMenu), id: doc.id }))
  //     );
  //     getBurgers();
  //     console.log(data)
  //   };
  // }, []);
  //   const { meatList } = React.useContext(Context);
  //   const meatBurgers = meatList;
  const burgers = productList.map((x) => (
    <BurgersCard burgers={x}></BurgersCard>
  ));

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

  // const vegetarianBurgers = productList
  // .filter((x) => x.subcategory === "Vegetarian")
  // .map((x) => <MenuCard vegetarianBurgers={x}></MenuCard>);
  return (
    <div>
      <AppBar></AppBar>
      <div className="bg">
        <section className="border">
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
        </section>
      </div>
    </div>
  );
};

export default Burgers;
