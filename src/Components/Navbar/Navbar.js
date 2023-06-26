import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <div className="logo-div">
          <li className="logo">
            <a href="/">DEBSOC</a>
          </li>
        </div>
        <div className="links-div">
          <li className="links">
            <a href="/">Home</a>
          </li>
          <li className="links">
            <a href="/">Community</a>
          </li>
          <li className="links">
            <a href="/">Membership</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
