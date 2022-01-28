import React from "react";
import ContentHeaderTop from "./ContentHeaderTop";
import ContentHeaderMiddle from "./ContentHeaderMiddle";
import ContentHeaderBottom from "./ContentHeaderBottom";

export default function ContentHeader() {
  return (
    <div className="ch-container">
      <br />
      <br />
      <br />
      <ContentHeaderTop />
      <br />
      <br />
      <br />
      <ContentHeaderMiddle />
      <br />
      <br />
      <br />
      <ContentHeaderBottom />
      <br />
      <br />
      <br />
    </div>
  );
}
