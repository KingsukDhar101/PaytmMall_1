import React from "react";
import ExFsGrid from "./ExFsGrid";
import "../../../Styles/Content/ImageGrid.css";
import ExFs from "./ExFs";

export default function GadgetZone() {
  return (
    <div className="large-container">
      <h2>Explore Fashion Collection</h2>
      <ExFsGrid />
      <ExFs />
    </div>
  );
}
