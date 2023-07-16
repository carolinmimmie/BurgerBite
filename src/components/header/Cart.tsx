import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useContext } from "react";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ProductCard from "./ProductCard";

const drawerWidth = 240;

export default function PermanentDrawerRight() {
  let navigationBack = useNavigate();
  const handleClickBack = () => {
    navigationBack(-1);
  };

  let navigationMenu = useNavigate();
  const handleClickMenu = () => {
    navigationMenu("/MainMenu");
  };

  let navigationCheckOut = useNavigate();
  const handleClickCheckOut = () => {
    navigationCheckOut("/CheckOut");
  };
  const { productList, cartList } = useContext(Context);

  const amount = cartList.reduce((total, product) => total + product.price, 0);

  

  const productCard = cartList.map((x) => (
    <ProductCard product={x}></ProductCard>
  ));
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="nav"
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar className="nav">
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={handleClickBack}
          >
            Go Back
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={handleClickMenu}
          >
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, backgroundColor: "#f4e9d3", p: 3 }}
      >
        <Toolbar />
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: " #35464f;",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <div className="cart-container">
          <img
            className="logo-cart"
            src="https://www.thebigkahuna.gr/images/parallax/logobigkahuna.png"
            alt=""
          />
        </div>
        <h6 className="my-order">My order:</h6>
        <div className="my-order-text">
          {cartList.length === 0 && (
            <div>Select the category and products you want to order.</div>
          )}
        </div>

        {productCard}

        <Typography sx={{ padding: 1, color: " #f4e9d3" }}>
          Total amount:
          {" " + amount.toFixed(2) + " SEK"}
        </Typography>
        <Box className="cartbuttons-container">
          <Button
            onClick={handleClickMenu}
            variant="contained"
            sx={{
              bgcolor: " #f4e9d3",
              color: "#35464f;",
              ":hover": { bgcolor: " #f4e9d3" },
              borderRadius: "0",
            }}
          >
            Order more
          </Button>
          <Button
            onClick={handleClickCheckOut}
            variant="contained"
            sx={{
              bgcolor: " #f4e9d3",
              color: "#35464f;",
              ":hover": { bgcolor: " #f4e9d3" },
              borderRadius: "0",
            }}
          >
            To checkout{" "}
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
