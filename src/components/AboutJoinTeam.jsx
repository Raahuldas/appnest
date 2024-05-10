import React from "react";
import { Link } from "react-router-dom";

function AboutJoinTeam() {
  return (
    <div className="text-ligh partners-main-cs ">
      <div className="container py-5">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-6 ">
            <h1 className="display-5 fw-semibold lh-1 mb-3">
            Join the AppNest team!
            </h1>
            <p className="lead">
            Innovate with the latest and greatest technologies & get to work on some of the coolest projects you can imagine.
            </p>
            <Link to={"/career"} >
            <button className="btn btn-primary px-3 py-2 mt-4">
                Apply Now
            </button>
            </Link>
          </div>

          <div className="col-10 col-sm-8 col-lg-6 mt-0 px-0 partners-box-css mx-auto">
            <div className="d-flex team-row-css">
              <div className="team-col-css ">
                <img
                  src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/join-team-img3.webp"
                  alt="partner logo"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="team-col-css ">
                <img
                  src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/join-appi-team1.webp"
                  alt="partner logo"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
            <div className="d-flex team-row-css">
              <div className="team-col-css ">
                <img
                  src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/join-appi-team1.webp"
                  alt="partner logo"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="team-col-css ">
                <img
                  src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/join-team-img3.webp"
                  alt="partner logo"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutJoinTeam;
