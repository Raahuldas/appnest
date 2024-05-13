import React from "react";
import CareerHero from "../components/CareerHero";
import CareerHire from "../components/CareerHire";
import CareerForm from "../components/CareerForm";

function CareerPage() {
  return <>
  <CareerHero/>
  <CareerHire/>
  <hr className="mx-3 border-2 border-dark opacity-25"/>
  <CareerForm/>
  </>;
}

export default CareerPage;
