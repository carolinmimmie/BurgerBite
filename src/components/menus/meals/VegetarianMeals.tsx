import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection, ordered } from "../../../Api";
interface IProps {
  vegetarianMeals: IMenu;
}
const VegetarianMeals = ({ vegetarianMeals }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (vegetarianMeals: IMenu) => {
    const newArray: IMenu[] = [...cartList, vegetarianMeals];
    setCartList(newArray);
  };
  const { orderedProduct, productList, setProductList } = useContext(Context);
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
          {vegetarianMeals.product}
        </Typography>
        <Typography variant="body2">{vegetarianMeals.description}</Typography>
      </CardContent>
      <CardActions className="card-content">
        <Button
          sx={{ color: "#009900" }}
          className="card-product"
          size="small"
          onClick={() => {
            ordered(vegetarianMeals)
            addToCartCollection(vegetarianMeals);
            updateCartCollection(vegetarianMeals);
          }}
        >
          Add
        </Button>
        <Button size="small" className="card-price" sx={{ color: "red" }}>
          {vegetarianMeals.price + " " + "KR"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default VegetarianMeals;
