import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection, ordered } from "../../../Api";
interface IProps {
  sweets: IMenu;
}

const Sweets = ({ sweets }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (sweets: IMenu) => {
    const newArray: IMenu[] = [...cartList, sweets];
    setCartList(newArray);
  };

  return (
    <Card className="card-container">
      <CardMedia
        className="test"
        sx={{ width: 200, margin: "auto" }}
        component="img"
        alt="green iguana"
        // height="300"
        image="https://www.svgrepo.com/show/475102/cheesecake.svg"
      />
      <CardContent className="card" sx={{ height: 90 }}>
        <Typography gutterBottom variant="h6" component="div">
          {sweets.product}
        </Typography>
        <Typography variant="body2">{sweets.description}</Typography>
      </CardContent>
      <CardActions className="card-content">
        <Button
            sx={{ color: "#009900" }}
          className="card-product"
          size="small"
          onClick={() => {
            ordered(sweets)
            addToCartCollection(sweets);
            updateCartCollection(sweets);
          }}
        >
          Add
        </Button>
        <Button size="small" className="card-price" sx={{ color: "red" }}>
          {sweets.price + " " + "KR"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Sweets;
