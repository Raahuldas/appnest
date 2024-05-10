import React from "react";

function AboutCoreValue() {
  return (
    <div class="my-5">
      <div class="p-5 text-center">
        <div class="container py-5">
          <h1 class="text-body-emphasis">Our Core Values</h1>
          <p class="col-lg-10 mx-auto lead fw-medium">
            We’re enthusiastic learners and seasoned inventors. Together, we can
            create solutions that serve not just technology but the humans
            behind it.{" "}
          </p>
        </div>

        <div className="row">
            <div className="col">
                <div className="display-1 fw-bold text-success opacity-25">01</div>
                <div className="fw-medium pb-2">Ensure impactful innovations</div>
                <div className="fw-normal">An unwavering commitment to drive maximum customer satisfaction, infused with integrity and passion.</div>
            </div>
            <div className="col">
                <div className="display-1 fw-bold text-success opacity-25">02</div>
                <div className="fw-medium pb-2">Focus on self-development</div>
                <div className="fw-normal">Training and mentorship programs, interactive sessions and community meetups to drive personal growth.</div>
            </div>
            <div className="col">
                <div className="display-1 fw-bold text-success opacity-25">03</div>
                <div className="fw-medium pb-2">Integrate work-life balance</div>
                <div className="fw-normal">Latest infrastructure and flexible working hours along with many other privileges that inculcate healthy lifestyle choices.</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCoreValue;
