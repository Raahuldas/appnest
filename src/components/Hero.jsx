import React from "react";

function Hero() {
  return (
    <div className="bg-dar text-secondary text-lg-center hero-video overflow-hidden ">
      <video
        src="/appnest.mp4"
        autoPlay
        muted
        loop
        className="w-100 h-100 object-fit-cover z-n1 position-absolute start-0"
      ></video>

      <div className="py-5 px-2 px-lg-0">
        <h1 className="display-5 fw-semibold text-white mt-5">
          ​​Meet the Digital Drivers of Global Disruptors
        </h1>
        <div className="col-lg-6 mx-lg-auto">
          <p className="fs-5 mb-4 text-light">
            We catalyze business growth by reimagining digital experiences that
            conquer complex challenges through innovation and agility.
          </p>
          <div className="d-flex justify-content-lg-center">
            <button
              type="button"
              className="btn btn-outline-light btn-lg px-4 me-sm-3 fw-bold"
            >
              Consult our experts &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
