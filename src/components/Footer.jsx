import React from "react";

function Footer() {
  return (
    <div class="p-5 text-center bg-dark text-light">
        

      <div class="container mx-auto row">
        
        <div className="col  py-5 mx-5">
          <img
            src="/images/banglore.png"
            alt="image"
            className="w-100 h-100 object-fit-contain border-bottom"
          />
        </div>
        <div className="col border-bottom py-5 mx-5">
          <img
            src="/images/delhi.png"
            alt="image"
            className="w-100 h-100 object-fit-contain"
          />
        </div>
        <div className="col border-bottom py-5 mx-5">
          <img
            src="/images/up.png"
            alt="image"
            className="w-100 h-100 object-fit-contain"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
