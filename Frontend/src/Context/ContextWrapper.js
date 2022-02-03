import React, { useState } from "react";
import SignAuthContext from "./SignAuthContext";
import UserContext from "./UserContext";

export default function ContextWrapper({ children }) {
  const [user, setUser] = useState(null);
  const [productArr, setProductArr] = useState(null);
  const [signinopen, setSigninopen] = useState(false);
  const [signupopen, setSignupopen] = useState(false);
  

  return (
    <UserContext.Provider value={{ user, setUser, productArr, setProductArr }}>
      <SignAuthContext.Provider
        value={{ signinopen, setSigninopen, signupopen, setSignupopen }}
      >
        {children}
      </SignAuthContext.Provider>
    </UserContext.Provider>
  );
}
