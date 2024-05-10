import React from "react";
import { Link } from "react-router-dom";

function AboutHero() {
  
  return (
    <div className=" text-secondary text-lg-center hero-video overflow-hidden ">
      <img
        src="https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-100 h-100 object-fit-cover z-n1 position-absolute start-0 "
      />

      <div className="py-5 px-2 px-lg-0 mt-5">
        <h1 className="display-5 fw-semibold text-white mt-5 pt-5">
          Transforming Businesses With Innovation{" "}
        </h1>
        <div className="col-lg-6 mx-lg-auto">
          <p className="fs-5 mb-4 text-light"></p>
          <div className="d-flex justify-content-lg-center my-5 ">
            <Link to={"/contact"}>
            <button
              type="button"
              className="btn btn-outline-light btn-lg px-4 me-sm-3 fw-bold"
              >
              Let's Discuss Opportunities &gt;
            </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
