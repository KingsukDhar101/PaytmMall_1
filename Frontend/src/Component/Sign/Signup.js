import React, { useState, useContext } from "react";
import SignAuthContext from "../../Context/SignAuthContext";
import code_img from "../../Assets/Images/qr_code.png";
import logoimg from "../../Assets/Images/paytmmall-logo.jpg";
// import Signin from "./Signin";
import "./Sign.css";
import axios from "axios";

export default function Signup() {
  const { signinopen, setSigninopen, signupopen, setSignupopen } =
    useContext(SignAuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCheck, setEmailcheck] = useState(false);
  const [passwordCheck, setPasswordcheck] = useState(false);
  const [error, setError] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    // console.log("Email : ", email);
    // console.log("Password : ", password);
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
    let responseData = await axios.post("http://localhost:5000/api/signup", {
      Username: email,
      Password: password,
    });
    console.log("Response : ", responseData);

    if (responseData.data.Success === 1) {
      console.log("abcd");
      setSignupopen(false);
      setSigninopen(true);
    } else {
      setError(responseData.data.Msg);
      console.log(error);
    }
    console.log("Response data : ", responseData.data);
  };

  function handleSigninButton(e) {
    // e.preventDefault();
    setSignupopen(false);
    setSigninopen(true);
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
              setSignupopen(false);
            }}
          >
            X
          </div>
          <div className="logo-img">
            <img src={logoimg} alt="" />
          </div>
          {emailCheck && <p className="error-msg">{emailCheck}</p>}
          <br />
          {passwordCheck && <p className="error-msg">{passwordCheck}</p>}
          <br />
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
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="sign-btn">
            <button onClick={handleSignup}>Signup</button>
          </div>
          <div className="sign-link">
            <span>
              Already have an account?{" "}
              <strong
                onClick={handleSigninButton}
                style={{ cursor: "pointer" }}
              >
                <p>[signin]</p>
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
