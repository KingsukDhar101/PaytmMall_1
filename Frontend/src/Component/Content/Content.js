import React from "react";
import ContentHeader from "./1_ContentHeader/ContentHeader";
import GadgetZone from "./2_GadgetZone/GadgetZone";
import ExMobTab from "./3_ExMobTab/ExMobTab";
import ExFsCollection from "./5_ExFashionCollection/ExFsCollection";

export default function Content() {
  return (
    <>
      <ContentHeader />
      <GadgetZone />
      <ExMobTab />
      <ExFsCollection />
    </>
  );
}
