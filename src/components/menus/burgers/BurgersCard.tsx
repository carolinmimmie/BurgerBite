import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import { IMenu } from "../../../interfaces";

interface IProps {
  burgers: IMenu;
}
const BurgersCard = ({ burgers }: IProps) => {
  return (
    <div className="menucard-container">
      {burgers.subcategory}
      <Card sx={{ maxWidth: 350, minHeight: 360 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          image="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        />
        <CardContent sx={{ height: 80 }}>
          <Typography gutterBottom variant="h6" component="div">
            {burgers.product}
          </Typography>
          <Typography
            sx={{ textTransform: "lowercase" }}
            variant="body2"
            color="text.secondary"
          >
            {burgers.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add</Button>
          <Button size="small">{burgers.price}</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default BurgersCard;
