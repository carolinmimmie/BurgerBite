import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection } from "../../../Api";
interface IProps {
  shakes: IMenu;
}

const Shakes = ({ shakes }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (shakes: IMenu) => {
    const newArray: IMenu[] = [...cartList, shakes];
    setCartList(newArray);
  };

  return (
    <Card className="card-container">
    <CardMedia className="test"      sx={{ width: 200, margin: "auto" }}
      component="img"
      alt="green iguana"
      // height="300"
      image="https://www.svgrepo.com/show/49011/melon-juice.svg"
    />
    <CardContent className="card" sx={{ height: 90 }}>
      <Typography gutterBottom variant="h6" component="div">
        {shakes.product}
      </Typography>
      <Typography variant="body2">{shakes.description}</Typography>
    </CardContent>
    <CardActions className="card-content">
      <Button sx={{ color: "#35464f" }}
        className="card-product"
        size="small"
        onClick={() => {
          addToCartCollection(shakes);
          updateCartCollection(shakes);
        }}
      >
        Add
      </Button>
      <Button size="small" className="card-price" sx={{ color: "red" }}>
        {shakes.price + " " + "KR"}
      </Button>
    </CardActions>
  </Card>
  );
};

export default Shakes;