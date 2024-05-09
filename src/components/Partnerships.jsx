import React from "react";

function Partnerships() {
  return (
    <div className="text-light partners-main-css">
      <div className="container py-5">
        <div className="row flex-lg-row-revers align-items-center g-5 py-5">
          <div className="col-lg-6 ">
            <h1 className="display-5 fw-semibold lh-1 mb-3">
              Strategic Partnerships to Unlock Greater Business Value
            </h1>
          </div>

          <div className="col-10 col-sm-8 col-lg-6 mt-0 px-0 partners-box-css mx-auto">
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
                    <img src="/images/Hostinger-logo.png" alt="partner logo" className="w-100 h-100 object-fit-contain"/>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Partnerships;
