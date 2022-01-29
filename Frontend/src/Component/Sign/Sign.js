import React, { useContext } from "react";
import SignAuthContext from "../../Context/SignAuthContext";
import code_img from "../../Assets/Images/qr_code.png";
import "./Sign.css";
export default function Sign() {
  const { setSignopen  } = useContext(SignAuthContext);
  return (
    <div className="sign-container-whole">
      <div className="sign-container">
        <div className="cross" onClick={()=>{setSignopen(false)}}>X</div>
        <div className="email-container">
          <div className="input-text">Email : </div>
          <input type="text" placeholder="Enter your email id" />
        </div>
        <div className="password-container">
          <div className="input-text">Password : </div>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="signin-btn">
          <button>Signin</button>
        </div>
      </div>
    </div>
  );
}
