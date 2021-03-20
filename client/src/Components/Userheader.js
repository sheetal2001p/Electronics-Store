import React from 'react'
import slogo from "../images/S-logo.png"
// import { Link } from "react-router-dom";
import { Link } from "react-scroll"

export default function Userheader() {
    return (
        <div>
            <header>
                <div className="left">
                    <img src={slogo} />
                </div>
                <h1>Sheetal's Electronics Store</h1>
                <div className="right">
                    <Link to="" id="profile-btn" className="btn">Profile</Link>
                </div>
            </header>
            <nav id="sub-menu">
                <Link to="home">Home</Link>
                <Link to="LC">Laptops and Computers</Link>
                <Link to="HA">Home Appliances</Link>
                <Link to="MT">Mobiles and Tablets</Link>
                <div className="right">
                    <Link to="/wishlist" id="wishlist-btn" className="btn">My Wishlist</Link>
                </div>
            </nav>
        </div>
    )
}
