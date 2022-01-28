import React from "react";
import { ExFsGrid } from "../../../Data/exFsCollGrid";
import "../../../Styles/Content/ImageGrid.css";

export default function GadgetGrid() {
  return (
    <div className="small-container">
      {ExFsGrid.map((item) => (
        <div className="grids">
          <img src={item} alt="" className="" />
        </div>
      ))}
    </div>
  );
}
