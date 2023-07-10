import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
import { addToCartCollection } from "../../../Api";
interface IProps {
  tea: IMenu;
}

const Tea = ({ tea }: IProps) => {
  const { cartList, setCartList } = useContext(Context);
  const updateCartCollection = (tea: IMenu) => {
    const newArray: IMenu[] = [...cartList, tea];
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
        image="https://www.svgrepo.com/show/475139/tea.svg"
      />
      <CardContent className="card" sx={{ height: 90 }}>
        <Typography gutterBottom variant="h6" component="div">
          {tea.product}
        </Typography>
        <Typography variant="body2">{tea.description}</Typography>
      </CardContent>
      <CardActions className="card-content">
        <Button
          sx={{ color: "#009900" }}
          className="card-product"
          size="small"
          onClick={() => {
            addToCartCollection(tea);
            updateCartCollection(tea);
          }}
        >
          Add
        </Button>
        <Button size="small" className="card-price" sx={{ color: "red" }}>
          {tea.price + " " + "KR"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Tea;
