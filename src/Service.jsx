import React from "react";
import Card from "./Card";

function Service() {
  return (
    <>
      <div className="my-5">
        <h2 className="text-center">Our Services</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-3">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
