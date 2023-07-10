import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection } from "../../../Api";
interface IProps {
    smoothies: IMenu;
}

const Smoothie = ({ smoothies }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (smoothies: IMenu) => {
    const newArray: IMenu[] = [...cartList, smoothies];
    setCartList(newArray);
  };

  return (
    <Card className="card-container">
    <CardMedia className="test"      sx={{ width: 200, margin: "auto" }}
      component="img"
      alt="green iguana"
      // height="300"
      image="https://www.svgrepo.com/show/356651/strawberry-smoothie.svg"
    />
    <CardContent className="card" sx={{ height: 90 }}>
      <Typography gutterBottom variant="h6" component="div">
        {smoothies.product}
      </Typography>
      <Typography variant="body2">{smoothies.description}</Typography>
    </CardContent>
    <CardActions className="card-content">
      <Button sx={{ color: "#35464f" }}
        className="card-product"
        size="small"
        onClick={() => {
          addToCartCollection(smoothies);
          updateCartCollection(smoothies);
        }}
      >
        Add
      </Button>
      <Button size="small" className="card-price" sx={{ color: "red" }}>
        {smoothies.price + " " + "KR"}
      </Button>
    </CardActions>
  </Card>
  );
};

export default Smoothie;