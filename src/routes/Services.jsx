import React, { useRef } from "react";
import ServicesHero from "../components/ServicesHero";
import ServicesNav from "../components/ServicesNav";
import ServicesSections from "../components/ServicesSections";
import ServicesMsgBox from "../components/ServicesMsgBox";


function Services() {
  const product = useRef()
  const mobile = useRef()
  const digital = useRef()
  const software = useRef()
  const cloud = useRef()
  const blockchain = useRef()
  const data = useRef()
  const ai = useRef()
  const it = useRef()
  const devOps = useRef()
  return (
    <>
      <ServicesHero />
      <ServicesNav product={product} mobile={mobile} digital={digital} software={software} cloud={cloud} blockchain={blockchain} data={data} ai={ai} it={it} devOps={devOps} />
      <ServicesSections product={product} mobile={mobile} digital={digital} software={software} cloud={cloud} blockchain={blockchain} data={data} ai={ai} it={it} devOps={devOps} />

      {/* <ServicesMsgBox/> */}
    </>
  );
}

export default Services;
