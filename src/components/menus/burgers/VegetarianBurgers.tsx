import React, { useContext } from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import { IMenu } from "../../../interfaces";
import { addToCartCollection, ordered } from "../../../Api";
import Context from "../../../context/Context";
interface IProps {
  vegetarianBurgers: IMenu;
}
const VegetarianBurgers = ({ vegetarianBurgers }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (vegetarianBurgers: IMenu) => {
    const newArray: IMenu[] = [...cartList, vegetarianBurgers];
    setCartList(newArray);
  };
  return (
    <Card className="card-container">
      <CardMedia
        sx={{ width: 200, margin: "auto" }}
        component="img"
        alt="green iguana"
        // height="300"
        image="https://www.svgrepo.com/show/396869/leafy-green.svg"
      />
      <CardContent className="card" sx={{ height: 90 }}>
        <Typography gutterBottom variant="h6" component="div">
          {vegetarianBurgers.product}
        </Typography>
        <Typography variant="body2">{vegetarianBurgers.description}</Typography>
      </CardContent>
      <CardActions className="card-content">
        <Button
          sx={{ color: "#009900" }}
          className="card-product"
          size="small"
          onClick={() => {
            ordered(vegetarianBurgers)
            addToCartCollection(vegetarianBurgers);
            updateCartCollection(vegetarianBurgers);
          }}
        >
          Add
        </Button>
        <Button size="small" className="card-price" sx={{ color: "red" }}>
          {vegetarianBurgers.price + " " + "KR"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default VegetarianBurgers;
