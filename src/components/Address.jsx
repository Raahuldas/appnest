import React from "react";

function Address() {
  return (
    <div className="px-5 py-0 text-center text-dark">
        

      <div className="container mx-auto row">
        
        <div className="col py- mx-5">
          <img
            src="/images/banglore.png"
            alt="image"
            className="w-100 pb-3 object-fit-contain border-bottom"
          />
          <p className="pt-2 pb-0 mb-2">HQ Banglore</p>
          <p className="fw-light">Whitefield - Bengaluru, Karnataka 560067</p>
        </div>
        <div className="col py- mx-5">
          <img
            src="/images/up0.png"
            alt="image"
            className="w-100 pb-3 object-fit-contain border-bottom"
          />
          <p className="pt-2 pb-0 mb-2">Uttar Pradesh</p>
          <p className="fw-light">maunath bhanjan uttar pradesh 275101</p>
        </div>
        <div className="col py- mx-5">
          <img
            src="/images/delhi.png"
            alt="image"
            className="w-100 pb-3 object-fit-contain border-bottom"
          />
          <p className="pt-2 pb-0 mb-2">Delhi</p>
          <p className="fw-light">Sector 12 Dwarka - Delhi 110078</p>
        </div>
        
      </div>
    </div>
  );
}

export default Address;
