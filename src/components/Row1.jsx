import React from "react";

function Row1() {
  return (
    <div className="p-5 text-center bg-dark">
      <div className="container mx-auto row">
        <div className="col border-end py-5">
          <img src="/images/deloitte.svg" alt="image" className="w-100 h-100 object-fit-contain" />
        </div>
        <div className="col border-end py-5">
          <img src="/images/img2.png" alt="image" className="w-100 h-100 object-fit-contain" />
        </div>
        <div className="col border-end py-5">
          <img src="/images/deloitte.svg" alt="image" className="w-100 h-100 object-fit-contain" />
        </div>
        <div className="col border-end py-5">
          <img src="/images/img2.png" alt="image" className="w-100 h-100 object-fit-contain" />
        </div>
        <div className="col py-5">
          <img src="/images/deloitte.svg" alt="image" className="w-100 h-100 object-fit-contain" />
        </div>
      </div>
    </div>
  );
}

export default Row1;
