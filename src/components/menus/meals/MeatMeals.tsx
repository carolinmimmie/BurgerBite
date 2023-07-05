import React, { useContext } from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import Context from "../../../context/Context";
interface IProps {
  meatMeals: IMenu;
}

const MeatMeals = ({ meatMeals }: IProps) => {
  const { orderedProduct, productList, setProductList } = useContext(Context);
  return (
    <div className="menucard-container">
      <Card className="menucard">
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          image="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
        />
        <CardContent className="card-content" sx={{ height: 90 }}>
          <Typography gutterBottom variant="h6" component="div">
            {meatMeals.product}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {meatMeals.description}
          </Typography>
        </CardContent>
        <CardActions className="card-content">
          <Button size="small" onClick={() => orderedProduct(meatMeals.id)}>
            Add
          </Button>
          <Button size="small">{meatMeals.price}</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MeatMeals;
