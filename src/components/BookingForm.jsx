import React from "react";
import ContactUsForm from "./ContactUsForm";

function BookingForm() {
 
  return (
    <div className="booking-form-css text-light">
      <div className="container py-5">
        <div className="row align-items-center g-lg-5 py-5 ">
          <div className="col-lg-6 text-center text-lg-start text-light">
            <h1 className="display-4 fw-semibold lh-1 text-white mb-3">
              Our Subject Matter Experts Are Change Catalysts
            </h1>
            <p className="col-lg-10 fs-5">
              Book Your First Presentation with Our Experts Today.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-6">
          <ContactUsForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
