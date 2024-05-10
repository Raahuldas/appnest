import React from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";

function CareerInfo() {
  return (
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 text-center ">
      <div class="feature col-12 col-md-4 px-5 mx-auto">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3 text-success pointer">
          <FaSquareWhatsapp />
        </div>
        <h3 class="fs-5 text-body-emphasis">WhatsApp</h3>
        <p>Support +91 9148054905</p>
      </div>

           
    </div>
  );
}

export default CareerInfo;
