import React from "react";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  let navigation = useNavigate();
  const handleClick = () => {
    navigation(-1);
  };
  return (
    <div>
      <header>
        <div className="appbar-container">
          <nav className="appbar">
            <button onClick={handleClick}>Go Back</button>
            <h1>Menu</h1>

            {/* <Link to="library">Bibliotek</Link>
          <Link to="mainview">Mina Böcker</Link>
          <Link to="player">Spelare</Link> */}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default AppBar;
