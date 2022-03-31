import React from "react";
import logo from "../Images/logo.png";
function Navbar() {
  return (
    <div className="navigation">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <div className="option">
            <a href="#"> Our Products</a>
          </div>
          <div className="option">
            <a href="#">Insights</a>
          </div>
          <div className="option">
            <a href="#">Smart Yarn</a>
          </div>
          <div className="option">
            <a href="#">About</a>
          </div>
          <div className="option">
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
