import React, { useState } from "react";

function ServicesNav({
  ai,
  product,
  mobile,
  digital,
  software,
  cloud,
  blockchain,
  data,
  it,
  devOps,
}) {
  const [selected, setSelected] = useState();
  

  const handleScrollProduct = () => {
    product.current.scrollIntoView({ behaviour: "smooth" });
    setSelected("product");
  };

  const handleScrollMobile = () => {
    mobile.current.scrollIntoView({ behaviour: "smooth" });
    setSelected("mobile");
  };

  const handleScrollDigital = () => {
    digital.current.scrollIntoView({ behaviour: "smooth" });
    setSelected("digital");
  };

  const handleScrollSoftware = () => {
    software.current.scrollIntoView({ behaviour: "smooth" });
    setSelected("software");
  };

  const handleScrollCloud = () => {
    cloud.current.scrollIntoView({ behaviour: "smooth" });
    setSelected("cloud");
  };

  const handleScrollBlockchain = () => {
    blockchain.current.scrollIntoView({ behaviour: "smooth" });
    setSelected("blockchain");
  };

  const handleScrollData = () => {
    data.current.scrollIntoView({ behaviour: "smooth" });
    setSelected("data");
  };

  const handleScrollAI = () => {
    ai.current.scrollIntoView({ behaviour: "smooth" });
    setSelected("ai");
  };

  const handleScrollIt = () => {
    it.current.scrollIntoView({ behaviour: "smooth" });
    setSelected("it");
  };

  const handleScrollDevOps = () => {
    devOps.current.scrollIntoView({ behaviour: "smooth" });
    setSelected("devops");
  };

  return (
    <div className="bg-black py-1 pt-3 sticky-top px-2">
      <div className="container-flui justify-content-around d-none d-md-flex bg-light sercices-nav-css border border-dark-subtle border-2 mx-auto align-items-center lh-1 text-center mt-5 rounded-4 py-3 ro ">
        <div
          className={`sections px-1 co pointer hover-shadow  ${
            selected === "product" && "text-danger"
          }`}
          onClick={handleScrollProduct}
        >
          Product Design & Ideation
        </div>
        <div
          className={`sections px-1 co pointer hover-shadow  ${
            selected === "mobile" && "text-danger"
          }`}
          onClick={handleScrollMobile}
        >
          Mobile APP Development
        </div>
        <div
          className={`sections px-1 co pointer hover-shadow  ${
            selected === "digital" && "text-danger"
          }`}
          onClick={handleScrollDigital}
        >
          Digital Transformation
        </div>
        <div
          className={`sections px-1 co pointer hover-shadow  ${
            selected === "software" && "text-danger"
          }`}
          onClick={handleScrollSoftware}
        >
          Software Development
        </div>
        <div
          className={`sections px-1 co pointer hover-shadow  ${
            selected === "cloud" && "text-danger"
          }`}
          onClick={handleScrollCloud}
        >
          Cloud Services
        </div>
        <div
          className={`sections px-1 co pointer hover-shadow  ${
            selected === "blockchain" && "text-danger"
          }`}
          onClick={handleScrollBlockchain}
        >
          Blockchain Services
        </div>
        <div
          className={`sections px-1 co pointer hover-shadow  ${
            selected === "data" && "text-danger"
          }`}
          onClick={handleScrollData}
        >
          Data Science & Analytics
        </div>
        <div
          className={`sections px-1 co pointer hover-shadow  ${
            selected === "ai" && "text-danger"
          }`}
          onClick={handleScrollAI}
        >
          AI & ML
        </div>
        <div
          className={`sections px-1 co pointer hover-shadow  ${
            selected === "it" && "text-danger"
          }`}
          onClick={handleScrollIt}
        >
          IT Consulting
        </div>
        <div
          className={`sections px-1 co pointer hover-shadow  ${
            selected === "devops" && "text-danger"
          }`}
          onClick={handleScrollDevOps}
        >
          DevOps
        </div>
      </div>
    </div>
  );
}

export default ServicesNav;
