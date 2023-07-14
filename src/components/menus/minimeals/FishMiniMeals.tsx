import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection, ordered } from "../../../Api";
interface IProps {
  fishMiniMeals: IMenu;
}
const FishMiniMeals = ({ fishMiniMeals }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (fishMiniMeals: IMenu) => {
    const newArray: IMenu[] = [...cartList, fishMiniMeals];
    setCartList(newArray);
  };
  return (
    <Card className="card-container">
    <CardMedia      sx={{ width: 200, margin: "auto" }}
      component="img"
      alt="green iguana"
      // height="300"
      image="https://www.svgrepo.com/show/191090/fish.svg"
    />
    <CardContent className="card" sx={{ height: 90 }}>
      <Typography gutterBottom variant="h6" component="div">
        {fishMiniMeals.product}
      </Typography>
      <Typography variant="body2">{fishMiniMeals.description}</Typography>
    </CardContent>
    <CardActions className="card-content">
      <Button   sx={{ color: "#009900" }}
        className="card-product"
        size="small"
        onClick={() => {
          ordered(fishMiniMeals)
          addToCartCollection(fishMiniMeals);
          updateCartCollection(fishMiniMeals);
        }}
      >
        Add
      </Button>
      <Button size="small" className="card-price" sx={{ color: "red" }}>
        {fishMiniMeals.price + " " + "KR"}
      </Button>
    </CardActions>
  </Card>
  );
};

export default FishMiniMeals;
