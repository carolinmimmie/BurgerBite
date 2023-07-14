import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection, ordered } from "../../../Api";
interface IProps {
  sodas: IMenu;
}

const Soda = ({ sodas }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (sodas: IMenu) => {
    const newArray: IMenu[] = [...cartList, sodas];
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
        image="https://www.svgrepo.com/show/217444/can-soda.svg"
      />
      <CardContent className="card" sx={{ height: 90 }}>
        <Typography gutterBottom variant="h6" component="div">
          {sodas.product}
        </Typography>
        <Typography variant="body2">{sodas.description}</Typography>
      </CardContent>
      <CardActions className="card-content">
        <Button
           sx={{ color: "#009900" }}
          className="card-product"
          size="small"
          onClick={() => {
            ordered(sodas)
            addToCartCollection(sodas);
            updateCartCollection(sodas);
          }}
        >
          Add
        </Button>
        <Button size="small" className="card-price" sx={{ color: "red" }}>
          {sodas.price + " " + "KR"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Soda;
