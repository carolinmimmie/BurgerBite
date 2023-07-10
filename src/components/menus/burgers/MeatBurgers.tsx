import React, { useContext } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import { IMenu } from "../../../interfaces";
import Context from "../../../context/Context";
import { addToCartCollection } from "../../../Api";
interface IProps {
  meatBurgers: IMenu;
}
const MeatBurgers = ({ meatBurgers }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (meatBurgers: IMenu) => {
    const newArray: IMenu[] = [...cartList, meatBurgers];
    setCartList(newArray);
  };
  return (
    <Card className="card-container">
      <CardMedia sx={{ width: 200, margin: "auto" }}
        className="card-image"
        component="img"
        alt="green iguana"
        // height="300"
        image="https://www.svgrepo.com/show/396220/cow-face.svg"
      />
      <CardContent className="card" sx={{ height: 90 }}>
        <Typography gutterBottom variant="h6" component="div">
          {meatBurgers.product}
        </Typography>
        <Typography variant="body2">{meatBurgers.description}</Typography>
      </CardContent>
      <CardActions className="card-content">
        <Button
            sx={{ color: "#009900" }}
          className="card-product"
          size="small"
          onClick={() => {
            addToCartCollection(meatBurgers);
            updateCartCollection(meatBurgers);
          }}
        >
          Add
        </Button>
        <Button size="small" className="card-price" sx={{ color: "red" }}>
          {meatBurgers.price + " " + "KR"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MeatBurgers;
