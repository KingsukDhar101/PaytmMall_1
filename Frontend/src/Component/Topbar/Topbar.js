import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
// import SearchIcon from "@material-ui/icons/Search";
// import Navbar from "react-bootstrap/Navbar";
import SignAuthContext from "../../Context/SignAuthContext";
import header_logo from "../../Assets/Images/paytmmall-logo.jpg";
import Sign from "../Sign/Sign";
import "./Topbar.css";
// import "../../Styles/Sign.css";

export default function Topbar() {
  const { signopen, setSignopen } = useContext(SignAuthContext);

  function handleSignopen(e) {
    e.preventDefault();
    setSignopen(true);
  }

  return (
    <>
      <div className="topbar-container">
        <div className="header-logo">
          <img src={header_logo} alt="" />
        </div>
        <div className="header-container">
          <div className="category-container">Shop by category</div>
          <div className="searchbar-container">
            <input
              type="text"
              placeholder="Search for a Product, Brand or Category"
            />
            <i class="fa fa-search"></i>
          </div>
          <div className="order-container">
            <div>My Orders</div>
          </div>
          <div className="cart-container">
            <div>Cart</div>
          </div>
          <div className="auth-container" onClick={handleSignopen}>
            <div>Log In/Sign Up</div>
          </div>
        </div>
      </div>
      {signopen && <Sign />}
    </>
  );
}
