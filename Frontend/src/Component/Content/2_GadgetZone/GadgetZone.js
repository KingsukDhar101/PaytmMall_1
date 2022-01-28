import React from "react";
import GadgetGrid from "./GadgetGrid";
import "../../../Styles/Content/ImageGrid.css";
import Gadgets from "./Gadgets";

export default function GadgetZone() {
  return (
    <div className="large-container">
      <h2>Gadget Zone</h2>
      <GadgetGrid />
      <Gadgets />
    </div>
  );
}
