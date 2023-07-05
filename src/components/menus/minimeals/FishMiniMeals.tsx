
import React from "react";
import { IMenu } from "../../../interfaces";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
interface IProps {
  fishMiniMeals: IMenu;
}
const FishMiniMeals = ({ fishMiniMeals }: IProps) => {
    return (
        <div className="menucard-container">
        <Card sx={{ maxWidth: 350, minHeight: 360 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
          />
          <CardContent sx={{ height: 80 }}>
            <Typography gutterBottom variant="h6" component="div">
              { fishMiniMeals.product}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { fishMiniMeals.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add</Button>
            <Button size="small">{ fishMiniMeals.price}</Button>
          </CardActions>
        </Card>
      </div>
    )
}

export default FishMiniMeals
