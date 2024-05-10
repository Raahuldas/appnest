import React from "react";
import AboutHero from "../components/AboutHero";
import AboutIntro from "../components/AboutIntro";
import AboutCoreValue from "../components/AboutCoreValue";
import AboutJoinTeam from "../components/AboutJoinTeam";

function AboutPage() {
  return (
    <>
    <AboutHero/>
    <AboutIntro />
    <hr className="mx-3 border-2 border-dark opacity-25"/>
    <AboutCoreValue/>
    <hr className="mx-3 border-2 border-dark opacity-25"/>
    <AboutJoinTeam/>
    </>
  );
}

export default AboutPage;
