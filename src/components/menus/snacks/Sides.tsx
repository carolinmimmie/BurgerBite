import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection } from "../../../Api";
interface IProps {
    sides: IMenu;
}

const Sides = ({ sides }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (sides: IMenu) => {
    const newArray: IMenu[] = [...cartList, sides];
    setCartList(newArray);
  };

  return (
    <Card className="card-container">
      <CardMedia  sx={{ width: 200, margin: "auto" }}
        component="img"
        alt="green iguana"
        // height="300"
        image="https://www.svgrepo.com/show/503903/drumstick.svg"
      />
      <CardContent className="card" sx={{ height: 90 }}>
        <Typography gutterBottom variant="h6" component="div">
          {sides.product}
        </Typography>
        <Typography variant="body2">{sides.description}</Typography>
      </CardContent>
      <CardActions className="card-content">
        <Button
            sx={{ color: "#009900" }}
          className="card-product"
          size="small"
          onClick={() => {
            addToCartCollection(sides);
            updateCartCollection(sides);
          }}
        >
          Add
        </Button>
        <Button size="small" className="card-price" sx={{ color: "red" }}>
          {sides.price + " " + "KR"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Sides;
