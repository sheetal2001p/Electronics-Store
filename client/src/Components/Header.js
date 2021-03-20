import React from "react";
import ReactDOM from "react-dom"
import { Link } from "react-router-dom";
import slogo from "../images/S-logo.png"

function Header() {
  return (
    <div>
      <header>
        <div className="left">
          <img src={slogo} />
        </div>
        <h1>Sheetal's Electronics Store</h1>
        <div className="right">
          <Link to="/login" id="login" className="btn">Login</Link>
          <Link to="/signup" id="signup" className="btn">Signup</Link>
        </div>
      </header>
    </div>
  );
}
export default Header;