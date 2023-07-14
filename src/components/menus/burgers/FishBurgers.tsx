import React, { useContext } from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import { IMenu } from "../../../interfaces";
import { addToCartCollection, ordered } from "../../../Api";
import Context from "../../../context/Context";

interface IProps {
  fishBurgers: IMenu;
}
const FishBurgers = ({ fishBurgers }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (fishBurgers: IMenu) => {
    const newArray: IMenu[] = [...cartList, fishBurgers];
    setCartList(newArray);
  };
  return (
    <Card className="card-container">
      <CardMedia
        sx={{ width: 200, margin: "auto" }}
        component="img"
        alt="green iguana"
        // height="300"
        image="https://www.svgrepo.com/show/191090/fish.svg"
      />
      <CardContent className="card" sx={{ height: 90 }}>
        <Typography gutterBottom variant="h6" component="div">
          {fishBurgers.product}
        </Typography>
        <Typography variant="body2">{fishBurgers.description}</Typography>
      </CardContent>
      <CardActions className="card-content">
        <Button
          sx={{ color: "#009900" }}
          className="card-product"
          size="small"
          onClick={() => {
            ordered(fishBurgers)
            addToCartCollection(fishBurgers);
            updateCartCollection(fishBurgers);
          }}
        >
          Add
        </Button>
        <Button size="small" className="card-price" sx={{ color: "red" }}>
          {fishBurgers.price + " " + "KR"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default FishBurgers;
