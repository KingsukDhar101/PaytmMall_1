import React from 'react';
import { ExMobTab } from "../../../Data/exMobTabGrid";
import "../../../Styles/Content/ImageGrid.css";

export default function ExMobTabGrid() {
  return (
    <div className="small-container">
      {ExMobTab.map((item) => (
        <div className="grids">
          <img src={item} alt="" className="" />
        </div>
      ))}
    </div>
  );
}
