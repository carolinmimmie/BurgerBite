import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Landingpage from "./components/landingpage/Landingpage";
import MainMenu from "./components/menus/MainMenu";
import { resourceLimits } from "worker_threads";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Meals from "./components/menus/Meals";
import Burgers from "./components/menus/burgers/Burgers";
import Addons from "./components/menus/Addons";
import Drinks from "./components/menus/Drinks";
import Desserts from "./components/menus/Desserts";
import MiniMeals from "./components/menus/MiniMeals";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <div className="App">
        <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage></Landingpage>} />
          <Route path="/Landingpage" element={<Landingpage></Landingpage>} />
          <Route path="/MainMenu" element={<MainMenu></MainMenu>} />
          <Route path="/Meals" element={<Meals></Meals>} />
          <Route path="/MiniMeals" element={<MiniMeals></MiniMeals>} />
          <Route path="/Burgers" element={<Burgers></Burgers>} />
          <Route path="/Addons" element={<Addons></Addons>} />
          <Route path="/Drinks" element={<Drinks></Drinks>} />
          <Route path="/Desserts" element={<Desserts></Desserts>} />
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
}
export default App;
