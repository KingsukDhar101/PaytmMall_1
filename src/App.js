import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./Components/Topbar/Topbar";
import Content from "./Components/Content/Content";
import Footers from "./Components/Footer/Footers";
import ContextWrapper from "./Context/ContextWrapper";

// added by kingsuk dhar
function App() {
  return (
    <ContextWrapper>
      <Router>
        <Topbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Content />} />
          </Routes>
        </div>
        <Footers />
      </Router>
    </ContextWrapper>
  );
}

export default App;
