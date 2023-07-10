import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import PermanentDrawerRight from "../header/Cart";

const MainMenu = () => {
  let navigationMeals = useNavigate();
  const handleClickMeals = () => {
    navigationMeals("/Meals");
  };

  let navigationMiniMeals = useNavigate();
  const handleClickMiniMeals = () => {
    navigationMiniMeals("/MiniMeals");
  };

  let navigationBurgers = useNavigate();
  const handleClickBurgers = () => {
    navigationBurgers("/Burgers");
  };

  let navigationAddons = useNavigate();
  const handleClickAddons = () => {
    navigationAddons("/Snacks");
  };

  let navigationDrinks = useNavigate();
  const handleClickDrinks = () => {
    navigationDrinks("/Drinks");
  };

  let navigationDesserts = useNavigate();
  const handleClickDesserts = () => {
    navigationDesserts("/Desserts");
  };

  return (
    <div className="container">
      {/* <AppBar></AppBar> */}
      <PermanentDrawerRight></PermanentDrawerRight>
      <div className="menu-container">
        <Card sx={{ maxWidth: 345 }} onClick={handleClickMeals}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.svgrepo.com/show/475115/fast-food.svg"
              alt="green iguana"
            />
            <CardContent sx={{ height: 90 }}>
              <Typography gutterBottom variant="h5" component="div">
                Meals
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }} onClick={handleClickMiniMeals}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.svgrepo.com/show/464617/mcdonalds.svg"
              alt="green iguana"
            />
            <CardContent sx={{ height: 90 }}>
              <Typography gutterBottom variant="h5" component="div">
                MiniMeals
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }} onClick={handleClickBurgers}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.svgrepo.com/show/475099/burger-huge.svg"
              alt="green iguana"
            />
            <CardContent sx={{ height: 90 }}>
              <Typography gutterBottom variant="h5" component="div">
                Burgers
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }} onClick={handleClickAddons}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.svgrepo.com/show/475107/chips.svg"
              alt="green iguana"
            />
            <CardContent sx={{ height: 90 }}>
              <Typography gutterBottom variant="h5" component="div">
                Snacks
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }} onClick={handleClickDrinks}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.svgrepo.com/show/475109/cola.svg"
              alt="green iguana"
            />
            <CardContent sx={{ height: 90 }}>
              <Typography gutterBottom variant="h5" component="div">
                Drinks
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }} onClick={handleClickDesserts}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.svgrepo.com/show/475114/donut.svg"
              alt="green iguana"
            />
            <CardContent sx={{ height: 90 }}>
              <Typography gutterBottom variant="h5" component="div">
                Desserts
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* <div className="hero-conatiner">
          <div className="menuhero-one" onClick={handleClickMeals}>
            <div className="menuhero-text">Meals</div>
          </div>

          <div className="menuhero-two" onClick={handleClickMiniMeals}>
            <div className="menuhero-text">Mini Meals</div>
          </div>
        </div>

        <div className="hero-conatiner">
          <div className="menuhero-three" onClick={handleClickBurgers}>
            <div className="menuhero-text">Burgers</div>
          </div>

          <div className="menuhero-four" onClick={handleClickAddons}>
            <div className="menuhero-text">Snacks</div>
          </div>
        </div>

        <div className="hero-conatiner">
          <div className="menuhero-five" onClick={handleClickDrinks}>
            <div className="menuhero-text">Drinks</div>
          </div>

          <div className="menuhero-six" onClick={handleClickDesserts}>
            <div className="menuhero-text">Desserts</div>
          </div>
        </div> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainMenu;
