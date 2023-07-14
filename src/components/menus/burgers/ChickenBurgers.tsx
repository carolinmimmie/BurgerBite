import React, { useContext } from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import { IMenu } from "../../../interfaces";
import Context from "../../../context/Context";
import { IProductCard } from "../../../interfaces";
import { addToCartCollection, ordered } from "../../../Api";
interface IProps {
  chickenBurgers: IMenu;
}

const quantity = 0;
const ChickenBurgers = ({ chickenBurgers }: IProps) => {
  const { cartList, setCartList, setProductList } = useContext(Context);
  const updateCartCollection = (chickenBurgers: IMenu) => {
    const newArray: IMenu[] = [...cartList, chickenBurgers];
    setCartList(newArray);
  };
  return (
    <Card className="card-container">
      <CardMedia
        sx={{ width: 200, margin: "auto" }}
        component="img"
        alt="green iguana"
        // height="300"
        image="https://www.svgrepo.com/show/280969/chicken.svg"
      />
      <CardContent className="card" sx={{ height: 90 }}>
        <Typography gutterBottom variant="h6" component="div">
          {chickenBurgers.product}
        </Typography>
        <Typography variant="body2">{chickenBurgers.description}</Typography>
      </CardContent>
      <CardActions className="card-content">
        {quantity === 0 ? (
          <Button
            sx={{ color: "#009900" }}
            className="card-product"
            size="small"
            onClick={() => {
              ordered(chickenBurgers)
              addToCartCollection(chickenBurgers);
              updateCartCollection(chickenBurgers);
            }}
          >
            Add 
          </Button>
        ) : null}
        <Button size="small" className="card-price" sx={{ color: "red" }}>
          {chickenBurgers.price + " " + "KR"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ChickenBurgers;
