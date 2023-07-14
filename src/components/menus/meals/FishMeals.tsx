import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection, ordered } from "../../../Api";
interface IProps {
  fishMeals: IMenu;
}

const FishMeals = ({ fishMeals }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (fishMeals: IMenu) => {
    const newArray: IMenu[] = [...cartList, fishMeals];
    setCartList(newArray);
  };
  return (
    <Card className="card-container">
    <CardMedia     sx={{ width: 200, margin: "auto" }}
      component="img"
      alt="green iguana"
      // height="300"
      image="https://www.svgrepo.com/show/191090/fish.svg"
    />
    <CardContent className="card" sx={{ height: 90 }}>
      <Typography gutterBottom variant="h6" component="div">
        {fishMeals.product}
      </Typography>
      <Typography variant="body2">{fishMeals.description}</Typography>
    </CardContent>
    <CardActions className="card-content">
      <Button   sx={{ color: "#009900" }}
        className="card-product"
        size="small"
        onClick={() => {
          ordered(fishMeals)
          addToCartCollection(fishMeals);
          updateCartCollection(fishMeals);
        }}
      >
        Add
      </Button>
      <Button size="small" className="card-price" sx={{ color: "red" }}>
        {fishMeals.price + " " + "KR"}
      </Button>
    </CardActions>
  </Card>
  );
};

export default FishMeals;
