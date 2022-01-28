import React, { useContext } from "react";
import Sign from "./Sign";
import "./Sign.css";
import SignAuthContext from '../../Context/SignAuthContext';

export default function SignAuth() {
  const {signopen, setSignopen} = useContext(SignAuthContext);
  function handleSignOpen() {
    setSignopen(true);
    console.log("signopen : ", signopen);
  }
  
  return (
    <div className="signauth-container">
      <h3
        className="sign-header"
        style={{ display: "inline-block", border: "1px solid red" }}
        onClick={handleSignOpen}
      >
        SignIn/SignUp
      </h3>
      {signopen && <Sign />}
    </div>
  );
}
