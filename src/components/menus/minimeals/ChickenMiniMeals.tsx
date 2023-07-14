import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection, ordered } from "../../../Api";
interface IProps {
  chickenMiniMeals: IMenu;
}

const ChickenMiniMeals = ({ chickenMiniMeals }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (chickenMiniMeals: IMenu) => {
    const newArray: IMenu[] = [...cartList, chickenMiniMeals];
    setCartList(newArray);
  };
  return (
    <Card className="card-container">
      <CardMedia      sx={{ width: 200, margin: "auto" }}
        className="card-image"
        component="img"
        alt="green iguana"
        // height="300"
        image="https://www.svgrepo.com/show/280969/chicken.svg"
      />
      <CardContent className="card" sx={{ height: 90 }}>
        <Typography gutterBottom variant="h6" component="div">
          {chickenMiniMeals.product}
        </Typography>
        <Typography variant="body2">{chickenMiniMeals.description}</Typography>
      </CardContent>
      <CardActions className="card-content">
        <Button
          sx={{ color: "#009900" }}
          className="card-product"
          size="small"
          onClick={() => {
            ordered(chickenMiniMeals)
            addToCartCollection(chickenMiniMeals);
            updateCartCollection(chickenMiniMeals);
          }}
        >
          Add
        </Button>
        <Button size="small" className="card-price" sx={{ color: "red" }}>
          {chickenMiniMeals.price + " " + "KR"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ChickenMiniMeals;
