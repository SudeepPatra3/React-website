import React from "react";

function Card() {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary text-center">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
