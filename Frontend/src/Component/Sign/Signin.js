import React, { useState, useContext } from "react";
import UserContext from "../../Context/UserContext";
import SignAuthContext from "../../Context/SignAuthContext";
import code_img from "../../Assets/Images/qr_code.png";
import logoimg from "../../Assets/Images/paytmmall-logo.jpg";
import Signup from "./Signup";
import axios from "axios";

import "./Sign.css";

export default function Signin() {
  const { signinopen, setSigninopen, signupopen, setSignupopen } =
    useContext(SignAuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCheck, setEmailcheck] = useState(false);
  const [passwordCheck, setPasswordcheck] = useState(false);
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log("Email : ", email);
    console.log("Password : ", password);

    if (!email.includes("@") || !email.includes(".")) {
      setEmailcheck("Enter correct email");
      return;
    } else {
      setEmailcheck(false);
    }

    if (password.length < 5) {
      setPasswordcheck("Password length must be greater than or equal to 5");
      return;
    } else {
      // email & password is true
      setPasswordcheck(false);
    }

    // sending email & password to backend - for authentication (matching email & password)
    let responseData = await axios.post("http://localhost:5000/api/login", {
      Username: email,
      Password: password,
    });
    console.log("Response : ", responseData);

    if (responseData.data.Success === 1) {
      console.log(responseData);
      setSignupopen(false);
      setSigninopen(false);
      setUser(email);
    } else {
      setError(responseData.data.Msg);
      console.log(error);
    }
    console.log("response data : ", responseData.data);
  };

  function handleSignupButton(e) {
    // e.preventDefault();
    setSigninopen(false);
    setSignupopen(true);
  }
  return (
    <div className="sign-container-whole">
      <div className="sign-container">
        <div className="left-container">
          <img src={code_img} alt="" />
          <h6>Scan QR code with Paytm App to login</h6>
        </div>
        <div className="right-container">
          <div
            className="cross"
            onClick={() => {
              setSigninopen(false);
            }}
          >
            X
          </div>
          <div className="logo-img">
            <img src={logoimg} alt="" />
          </div>
          {emailCheck && <p className="error-msg">{emailCheck}</p>}
          {passwordCheck && <p className="error-msg">{passwordCheck}</p>}
          {error && <p className="error-msg">{error}</p>}
          <div className="email-container">
            <div className="input-text">Email : </div>
            <input
              type="text"
              placeholder="Enter your email id"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-container">
            <div className="input-text">Password : </div>
            <input
              id="p-input"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="sign-btn">
            <button onClick={handleSignin}>Signin</button>
          </div>
          <div className="sign-link">
            <span>
              Don't have account?{" "}
              <strong
                onClick={handleSignupButton}
                style={{ cursor: "pointer" }}
              >
                <p>[signup]</p>
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
