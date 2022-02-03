import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
// import SearchIcon from "@material-ui/icons/Search";
// import Navbar from "react-bootstrap/Navbar";
import SignAuthContext from "../../Context/SignAuthContext";
import UserContext from "../../Context/UserContext";
import header_logo from "../../Assets/Images/paytmmall-logo.jpg";
import Signin from "../Sign/Signin";
import "./Topbar.css";
import Signup from "../Sign/Signup";
// import "../../Styles/Sign.css";

export default function Topbar() {
  const { signinopen, setSigninopen, signupopen, setSignupopen } =
    useContext(SignAuthContext);
  const { user, setUser } = useContext(UserContext);

  function handleSigninopen(e) {
    e.preventDefault();
    setSigninopen(true);
  }


  return (
    <>
      <div className="topbar-container">
        <div className="header-logo">
          <img src={header_logo} alt="" />
        </div>
        <div className="header-container">
          <div className="category-container">
            <i className="material-icons" style={{ color: "tomato" }}>
              format_align_justify
            </i>
            <div className="category-text">Shop by category</div>
          </div>
          <div className="searchbar-container">
            <input
              type="text"
              placeholder="Search for a Product, Brand or Category"
            />
            <i className="fa fa-search"></i>
          </div>
          <div className="order-container">
            <i className="fas fa-clipboard" style={{ color: "tomato" }}></i>
            <div>My Orders</div>
          </div>
          <div className="cart-container">
            <i className="fa fa-shopping-bag" style={{ color: "tomato" }}></i>
            <div>Cart</div>
          </div>
          {!user ? (
            <div className="auth-container" onClick={handleSigninopen}>
              <i
                className="far fa-grin"
                style={{ fontSize: "18px", color: "tomato" }}
              ></i>
              <div>Log In/Sign Up</div>
            </div>
          ) : (
            <div className="auth-container">
              <i
                className="far fa-grin"
                style={{ fontSize: "18px", color: "tomato" }}
              ></i>
              <div>{user}</div>
              <div className="profile-container-atHover">
                <div>View Profile</div>
                <div>Your Whislist</div>
                <div>Your Wallet</div>
                <div>24x7 Help</div>
                <div>Log Out</div>
              </div>
            </div>
          )}
        </div>
      </div>
      {signinopen && <Signin />}
      {signupopen && <Signup />}
    </>
  );
}
