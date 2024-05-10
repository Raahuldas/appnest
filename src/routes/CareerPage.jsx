import React from "react";
import CareerHero from "../components/CareerHero";
import CareerHire from "../components/CareerHire";
import CareerForm from "../components/CareerForm";
import CareerInfo from "../components/CareerInfo";

function CareerPage() {
  return <>
  <CareerHero/>
  <CareerHire/>
  <hr className="mx-3 border-2 border-dark opacity-25"/>
  <CareerForm/>
  <hr className="mx-3 border-2 border-dark opacity-25"/>
  <CareerInfo/>
  </>;
}

export default CareerPage;
