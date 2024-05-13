import React from "react";

function CareerHire() {
  return (
    <div className="container px-4 py-5" id="featured-3">
        <h3 className="pb-5 text-primary text-center">Welcome to our Careers section. Please review the positions we are currently hiring for and apply to the ones that interest you</h3>
      <h2 className="pb-2 text-center">How we Hire?</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 text-center">
        <div className="feature col-12 col-md-4 px-3">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <img src="/images/1.png" alt="img" className="w-100 h-100" />
          </div>
          <h3 className="fs-5 text-body-emphasis">Apply</h3>
          <p>
            See something you want to be part of? Just select the job and apply
            in the above section.
          </p>
        </div>

        <div className="feature col-12 col-md-4 px-3">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <img src="/images/2.png" alt="img" className="w-100 h-100" />
          </div>
          <h3 className="fs-5 text-body-emphasis">Written/Technical</h3>
          <p>
            If we like what we see in your profile, we'll reach out for a
            written/technical interview as a precursor to the next big thing.{" "}
          </p>
        </div>

        <div className="feature col-12 col-md-4 px-3">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <img src="/images/3.png" alt="img" className="w-100 h-100" />
          </div>
          <h3 className="fs-5 text-body-emphasis">Personal Interview</h3>
          <p>
            Here's where we meet you and find out if you have what it takes to
            become part of our thriving team.{" "}
          </p>
        </div>

        <div className="feature col-12 col-md-4 px-3">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <img src="/images/4.png" alt="img" className="w-100 h-100" />
          </div>
          <h3 className="fs-5 text-body-emphasis">HR Discussion</h3>
          <p>
          A short exchange with our HR team will follow. Feel free to ask as many questions as you want.
          </p>
        </div>

        <div className="feature col-12 col-md-4 px-3">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <img src="/images/5.png" alt="img" className="w-100 h-100" />
          </div>
          <h3 className="fs-5 text-body-emphasis">Final Review</h3>
          <p>
          We'll be right back with you after a short discussion internally. Hold tight until then!
          </p>
        </div>

      </div>
    </div>
  );
}

export default CareerHire;
