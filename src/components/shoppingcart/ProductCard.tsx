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
          <div className="title" style={{ fontSize: "19px", color: "black" }}>
            {product.product.charAt(0).toUpperCase() + product.product.slice(1)}
          </div>
          <div>{product.price} kr</div>
        </div>
        <div className="icons-container"></div>
      </div>
      <div className="cardButton">
        <Button
          onClick={() => {
            dFromCart(product.id);
          }}
          // onClick={() => {
          //   addToCartCollection(product);
          //   updateCartCollection(product);
          // }}
          sx={{
            bgcolor: " rgba(000000, 0, 0, 0.8);",
            ":hover": { bgcolor: "black ;" },
            borderRadius: "0",
          }}
          variant="contained"
        >
          X
          {/* <WorkOutlineIcon
              className="workoutline-icon"
              sx={{ fontSize: "35px" }}
            /> */}
        </Button>
   
      </div>
    </div>
  );
};

export default ProductCard;
