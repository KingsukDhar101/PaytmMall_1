import React from "react";
import ExMobTabGrid from './ExMobTabGrid';
import "../../../Styles/Content/ImageGrid.css";
import ExMobs from "./ExMobs";

export default function ExMobTab() {
  return (
    <div className="large-container">
      <h2>Explore Mobiles & Tablets</h2>
      <ExMobTabGrid />
      <ExMobs />
    </div>
  );
}
