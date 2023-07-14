import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection, ordered } from "../../../Api";
interface IProps {
  coffee: IMenu;
}

const Coffee = ({ coffee }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (coffee: IMenu) => {
    const newArray: IMenu[] = [...cartList, coffee];
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
        image="https://www.svgrepo.com/show/477069/tea.svg"
      />
      <CardContent className="card" sx={{ height: 90 }}>
        <Typography gutterBottom variant="h6" component="div">
          {coffee.product}
        </Typography>
        <Typography variant="body2">{coffee.description}</Typography>
      </CardContent>
      <CardActions className="card-content">
        <Button
            sx={{ color: "#009900" }}
          className="card-product"
          size="small"
          onClick={() => {
            ordered(coffee)
            addToCartCollection(coffee);
            updateCartCollection(coffee);
          }}
        >
          Add
        </Button>
        <Button size="small" className="card-price" sx={{ color: "red" }}>
          {coffee.price + " " + "KR"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Coffee;
