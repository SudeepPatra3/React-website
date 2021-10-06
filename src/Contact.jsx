import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    number: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Data is ${data.fullname}${data.email}${data.number} `);
  };

  return (
    <>
      <h3 className="my-5 text-center">Contact Us</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto card p-4">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Number</label>
                <input
                  type="num"
                  className="form-control"
                  name="number"
                  value={data.number}
                  onChange={InputEvent}
                  placeholder="Enter Your Number"
                  required
                />
              </div>
              <div className="text-center">
                <button className="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
