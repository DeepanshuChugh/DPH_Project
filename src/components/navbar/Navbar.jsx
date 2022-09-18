import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">DeepHotels</span>
        <div className="navitems">
          <button className="navbuttons">Register</button>
          <button className="navbuttons">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
