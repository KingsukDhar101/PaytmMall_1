import React, { useState } from "react";
import SignAuthContext from "./SignAuthContext";

export default function ContextWrapper({ children }) {
  const [signopen, setSignopen] = useState(false);

  return (
    <SignAuthContext.Provider
      value={{ signopen, setSignopen}}
    >
      {children}
    </SignAuthContext.Provider>
  );
}
