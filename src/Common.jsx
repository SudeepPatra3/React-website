import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img.png";

function Common(props) {
  return (
    <>
      <section className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2>
                    {props.name}
                    <strong className="text-primary"> Sudeep</strong>
                  </h2>
                  <h3 className="my-3">
                    We are the team of talented Developer making websites
                  </h3>
                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      className="btn btn-outline-danger"
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                  <img src={props.imgsrc} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
