import React from "react";
import { gadgetGrid } from "../../../Data/gadgetGrid";
import "../../../Styles/Content/ImageGrid.css";

export default function GadgetGrid() {
  return (
    <div className="small-container">
      {gadgetGrid.map((item) => (
        <div className="grids">
          <img src={item} alt="" className="" />
        </div>
      ))}
    </div>
  );
}
