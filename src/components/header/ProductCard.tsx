import React, { useContext } from "react";
import { Link } from "react-router-dom";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Context from "../../context/Context";
import { Button, Typography } from "@mui/material";
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
  const updateCartCollection = (product: IMenu) => {
    const newArray: IMenu[] = [...cartList, product];
    setCartList(newArray);
  };

  return (
    <div className="productcard-container">
      <div className="image-container">
        <img src={""} />
      </div>

      <div className="icon-text-container">
        <div className="productcard-text">
          <div className="produccard-product" style={{ fontSize: "19px" }}>
            {product.product.charAt(0).toUpperCase() + product.product.slice(1)}

            <div className="x"
              onClick={() => {
                dFromCart(product.id);
              }}
            >
              X
            </div>
          </div>
            <div>{product.price} kr</div>
        </div>
      </div>

      <div className="cardButton"></div>
      <hr />
    </div>
  );
};

export default ProductCard;
