import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection } from "../../../Api";
interface IProps {
  chickenMeals: IMenu;
}

const ChickenMeals = ({ chickenMeals }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (chickenMeals: IMenu) => {
    const newArray: IMenu[] = [...cartList, chickenMeals];
    setCartList(newArray);
  };
  return (
    <Card className="card-container">
      <CardMedia        sx={{ width: 200, margin: "auto" }}
        component="img"
        alt="green iguana"
        // height="300"
        image="https://www.svgrepo.com/show/280969/chicken.svg"
      />
      <CardContent className="card" sx={{ height: 90 }}>
        <Typography gutterBottom variant="h6" component="div">
          {chickenMeals.product}
        </Typography>
        <Typography variant="body2">{chickenMeals.description}</Typography>
      </CardContent>
      <CardActions className="card-content">
        <Button   sx={{ color: "#009900" }}
          className="card-product"
          size="small"
          onClick={() => {
            addToCartCollection(chickenMeals);
            updateCartCollection(chickenMeals);
          }}
        >
          Add
        </Button>
        <Button size="small" className="card-price" sx={{ color: "red" }}>
          {chickenMeals.price + " " + "KR"}
        </Button>
      </CardActions>
    </Card>
  
  );
};
 
export default ChickenMeals;
