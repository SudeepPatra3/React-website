import React from "react";
import web from "../src/images/img.png";
import Common from "./Common";

function Home() {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
}

export default Home;
