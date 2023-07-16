import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Context from "../../context/Context";
import { Box, Button, Divider, Typography } from "@mui/material";
import { IMenu } from "../../interfaces";

import {
  addToCartCollection,
  deleteFromCart,
  getCartCollection,
} from "../../Api";
interface IProps {
  product: IMenu;
}

const ProductCard = ({ product }: IProps) => {
  let navigationMenu = useNavigate();
  const handleClickMenu = () => {
    navigationMenu("/MainMenu");
  };
  const dFromCart = async (id: string) => {
    await deleteFromCart(id);
    setCartList(await getCartCollection());
  };

  const {
    unOrderedProduct,
    productList,
    setProductList,
    cartList,
    setCartList,
  } = useContext(Context);


  // const test = cartList.reduce((total, product) => total + product.quantity, 0);
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };
  const remove = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="productcard-container">
      <div className="icon-text-container">
        <div className="productcard-text">
          <div className="produccard-product" style={{ fontSize: "19px" }}>
            {product.product.charAt(0).toUpperCase() + product.product.slice(1)}
          </div>
          <div className="productcard-row">
            <div>{product.price.toFixed(2)} SEK</div>
            <button onClick={remove}>-</button>
            {quantity}
            <button onClick={increase}>+</button>
            <button
              onClick={() => {
                dFromCart(product.id);
              }}
            >
              x
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductCard;
