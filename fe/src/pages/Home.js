import React from "react";
import ImageSlider from "../component/ImageSlider-2";
import Introduction from "../component/Introduction";
import MyWork from "../component/MyWork";
import MyWorkDetail from "../component/MyWorkDetail";
import Navbar from "../component/Navbar";

function Home() {
  return (
    <>
      <Introduction />
      <MyWork />
      <MyWorkDetail />
      {/* <ImageSlider /> */}
    </>
  );
}

export default Home;
