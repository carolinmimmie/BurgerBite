import React, { useContext } from "react";

import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection, ordered } from "../../../Api";
interface IProps {
  vegetarianMiniMeals: IMenu;
}

const VegetarianMiniMeals = ({ vegetarianMiniMeals }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (vegetarianMiniMeals: IMenu) => {
    const newArray: IMenu[] = [...cartList, vegetarianMiniMeals];
    setCartList(newArray);
  };
  return (
    <Card className="card-container">
    <CardMedia      sx={{ width: 200, margin: "auto" }}
      component="img"
      alt="green iguana"
      // height="300"
      image="https://www.svgrepo.com/show/396869/leafy-green.svg"
    />
    <CardContent className="card" sx={{ height: 90 }}>
      <Typography gutterBottom variant="h6" component="div">
        {vegetarianMiniMeals.product}
      </Typography>
      <Typography variant="body2">{vegetarianMiniMeals.description}</Typography>
    </CardContent>
    <CardActions className="card-content">
      <Button   sx={{ color: "#009900" }}
        className="card-product"
        size="small"
        onClick={() => {
          ordered(vegetarianMiniMeals)
          addToCartCollection(vegetarianMiniMeals);
          updateCartCollection(vegetarianMiniMeals);
        }}
      >
        Add
      </Button>
      <Button size="small" className="card-price" sx={{ color: "red" }}>
        {vegetarianMiniMeals.price + " " + "KR"}
      </Button>
    </CardActions>
  </Card>
  );
};

export default VegetarianMiniMeals;
