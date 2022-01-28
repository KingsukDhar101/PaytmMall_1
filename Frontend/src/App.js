import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./Component/Topbar/Topbar";
import Content from "./Component/Content/Content";
import Footer from "./Component/Footer/Footer";
// import SignAuth from "./Component/Sign/SignAuth";
import ContextWrapper from "./Context/ContextWrapper";
import "./Styles/App.css";

// import { groupData } from "./data";

function App() {
  // let img1 = groupData[0].i1;
  return (
    <ContextWrapper>
      <Router>
        <div className="App">
          <Topbar />
          <Routes>
            <Route path="/" element={<Content />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ContextWrapper>
  );
}

export default App;
