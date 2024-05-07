import React from "react";

function Partnerships() {
  return (
    <div className="text-light partners-main-css">
      <div class="container py-5">
        <div class="row flex-lg-row-revers align-items-center g-5 py-5">
          <div class="col-lg-6 ">
            <h1 class="display-5 fw-semibold lh-1 mb-3">
              Strategic Partnerships to Unlock Greater Business Value
            </h1>
          </div>

          <div class="col-10 col-sm-8 col-lg-6 mt-0 px-0 partners-box-css">
            <div className="d-flex partner-row-css">
                <div className="partner-col-css p-5">
                    <img src="/images/aws-partner.svg" alt="partner logo" className="w-100 h-100 object-fit-contain"/>
                </div>
                <div className="partner-col-css p-5">
                    <img src="/images/mongodb-partner.svg" alt="partner logo" className="w-100 h-100 object-fit-contain"/>
                </div>
            </div>
            <div className="d-flex partner-row-css">
            <div className="partner-col-css p-5">
                    <img src="/images/google-cloud-partner.svg" alt="partner logo" className="w-100 h-100 object-fit-contain"/>
                </div>
                <div className="partner-col-css p-5">
                    <img src="/images/cloudinary-partner.svg" alt="partner logo" className="w-100 h-100 object-fit-contain"/>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Partnerships;
