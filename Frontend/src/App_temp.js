import Carousels from "./Component/Content/Carousels";
import MultiCarousels from "./Component/Content/MultiCarousels";
import PageCarousels from "./Component/Content/PageCarousels";
import "./Styles/App.css";
// import { groupData } from "./data";

function App() {
  // let img1 = groupData[0].i1;
  return (
    <div className="App">
      <Carousels />
      <br />
      <br />
      <br />
      <MultiCarousels />
      <br />
      <br />
      <br />
      <PageCarousels />
      <br />
      <br />
      <br />
      {/* <div>
        <img src={img1} alt="" />
      </div> */}
    </div>
  );
}

export default App;
