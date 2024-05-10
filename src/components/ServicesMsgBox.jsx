import React from "react";
import { Link } from "react-router-dom";

function ServicesMsgBox() {
  return (
    <div className="py-5 my-5 text-center bg-blac">
      <div className="container p-5 border border-5 border-dark-subtle rounded-5 my-5 bg-black text-light">
        <p className="fs-4 fw-bold">Create digital revenue streams that scale your business to new
        landscapes of efficiency, profitability and leadership</p>
        <Link to={"/contact"}>
        <button className="btn btn-outline-light px-4" >
          Contact Us
        </button>
        </Link>
      </div>
    </div>
  );
}

export default ServicesMsgBox;
