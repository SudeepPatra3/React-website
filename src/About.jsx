import React from "react";
import Common from "./Common";
import web from "../src/images/preview.png";
function About() {
  return (
    <>
      <Common
        name="Welcome to"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}

export default About;
