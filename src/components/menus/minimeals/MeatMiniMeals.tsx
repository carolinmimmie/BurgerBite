import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection, ordered } from "../../../Api";
interface IProps {
  meatMiniMeals: IMenu;
}

const MeatMiniMeals = ({ meatMiniMeals }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (meatMiniMeals: IMenu) => {
    const newArray: IMenu[] = [...cartList, meatMiniMeals];
    setCartList(newArray);
  };

  return (
    <Card className="card-container">
    <CardMedia className="test"      sx={{ width: 200, margin: "auto" }}
      component="img"
      alt="green iguana"
      // height="300"
      image="https://www.svgrepo.com/show/396220/cow-face.svg"
    />
    <CardContent className="card" sx={{ height: 90 }}>
      <Typography gutterBottom variant="h6" component="div">
        {meatMiniMeals.product}
      </Typography>
      <Typography variant="body2">{meatMiniMeals.description}</Typography>
    </CardContent>
    <CardActions className="card-content">
      <Button   sx={{ color: "#009900" }}
        className="card-product"
        size="small"
        onClick={() => {
          ordered(meatMiniMeals)
          addToCartCollection(meatMiniMeals);
          updateCartCollection(meatMiniMeals);
        }}
      >
        Add
      </Button>
      <Button size="small" className="card-price" sx={{ color: "red" }}>
        {meatMiniMeals.price + " " + "KR"}
      </Button>
    </CardActions>
  </Card>
  );
};

export default MeatMiniMeals;
