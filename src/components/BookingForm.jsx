import React from "react";

function BookingForm() {
  return (
    <div className="booking-form-css text-light">
      <div class="container py-5">
        <div class="row align-items-center g-lg-5 py-5 ">
          <div class="col-lg-6 text-center text-lg-start text-light">
            <h1 class="display-4 fw-semibold lh-1 text-white mb-3">
              Our Subject Matter Experts Are Change Catalysts
            </h1>
            <p class="col-lg-10 fs-5">
              Book Your First Presentation with Our Experts Today.
            </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-6">
            <form class="form-css py-4 borde rounded-3 bg-black px-4 mx-lg-auto mt-5 mt-lg-0">
              <div class="form-floating mb-3 border-bottom border-1">
                <input
                  type="text"
                  class="form-control border-0 bg-black"
                  id="floatingFullname"
                  placeholder="Full Name"
                />
                <label for="floatingFullname">Full Name</label>
              </div>
              <div class="form-floating mb-3 border-bottom">
                <input
                  type="email"
                  class="form-control border-0 bg-black"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3  border-bottom bg-black">
                <input
                  type="text"
                  class="form-control border-0 bg-black"
                  id="floatingContact"
                  placeholder="Contact Number"
                />
                <label for="floatingContact">Contact Number</label>
              </div>
              <div class="form-floating mb-3 border-bottom border-1">
                <select class="form-select border-0 bg-black text-light" aria-label="Default select example">
                  <option className="bg-light text-dark" selected>Select a Budget Range</option>
                  <option className="bg-light text-dark" value="1">Between $10k to $50k </option>
                  <option className="bg-light text-dark" value="2">Between $50k to $100k</option>
                  <option className="bg-light text-dark" value="3">more than $100k</option>
                </select>
              </div>
              <div class="form-floating mb-3 border-bottom">
                <input
                  type="text"
                  class="form-control border-0 bg-black"
                  id="floatingProject"
                  placeholder="Project description*"
                />
                <label for="floatingProject">Project descripion*</label>
              </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" />{" "}
                  <small>Include Copy of a Non-Disclosure Agreement</small>
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-dark bg-black-subtle mt-4" type="submit">
                Request Proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
