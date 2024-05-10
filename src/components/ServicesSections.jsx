import React from "react";
import { useNavigate } from "react-router-dom";

function ServicesSections({
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
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <div className="sections-container-cs bg-black text-light bg-gradien">
      <div className="container py-5" ref={product}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <p>
              We formulate, design, and engineer creativity through our ideation
              and product design services that give you maximum value and help
              you captivate your audience with designs and products that are
              unparalleled in quality.
            </p>
            <div className="grid gap-3">
              <button className="col-5 btn btn-outline-light m-1">
                UI/UX{" "}
              </button>
            </div>{" "}
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasi lh-1 mb-3">
              Product Design & Ideation
            </h1>
            <p className="lead">Unwavering commitment to perfection</p>

            <button
              type="button"
              className="btn btn-outline-light px-4 me-md-2 my-5"
              onClick={handleContact}
            >
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>

      <hr className="mx-3 border-2 border-dar opacity-25" />

      <div className="container py-5" ref={mobile}>
        <div className="row flex-lg-row-revers align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <p>
              Whatever your niche, industry, or product may be, we can deliver
              an app that will skyrocket your market position while captivating
              your users and audience. Using DevOps and agile methodologies, we
              uncover value prepositions from your offerings embedding them in a
              futuristic app.
            </p>
            <div className="grid gap-3">
              <button className="col-5 btn btn-outline-light m-1">
                Product Consulting{" "}
              </button>
              <button className="col-5 btn btn-outline-light m-1">
                Mobile-First Design{" "}
              </button>
              <button className="col-5 btn btn-outline-light m-1">PWA </button>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasi lh-1 mb-3">
              Mobile App Development
            </h1>
            <p className="lead">
              Augmenting the mobile experience for your users
            </p>

            <button
              type="button"
              className="btn btn-outline-light px-4 me-md-2 my-5"
              onClick={handleContact}
            >
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>

      <hr className="mx-3 border-2 border-dar opacity-25" />

      <div className="container py-5" ref={digital}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <p>
              Thriving in the 21st century is not a challenge with technology by
              your side. With our advanced digital transformation services we
              transform entire industries with innovation and ingenuity building
              business resiliency for the future.
            </p>
            <div className="grid gap-3">
              <button className="col-5 btn btn-outline-light m-1">
                Supply Chain Management{" "}
              </button>
              <button className="col-5 btn btn-outline-light m-1">
                Legacy App Modernization{" "}
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasi lh-1 mb-3">
              Digital Transformation
            </h1>
            <p className="lead">
              Maximizing capabilities by strengthening technology
            </p>

            <button
              type="button"
              className="btn btn-outline-light px-4 me-md-2 my-5"
              onClick={handleContact}
            >
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>

      <hr className="mx-3 border-2 border-dar opacity-25" />

      <div className="container py-5" ref={software}>
        <div className="row flex-lg-row-revers align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <p>
              We are agile, we are innovative, we are Appinventiv and we
              engineer software solutions that cater to your specific pain
              points head-on delivering value and unlocking revenue.
            </p>
            <div className="grid gap-3">
              <button className="col-5 btn btn-outline-light m-1">
                ERP Software Development
              </button>
              <button className="col-5 btn btn-outline-light m-1">
                Custom CRM Development
              </button>
              <button className="col-5 btn btn-outline-light m-1">
                AR/VR Development
              </button>
              <button className="col-5 btn btn-outline-light m-1">
                IOT Development
              </button>
              <button className="col-5 btn btn-outline-light m-1">
                Microsercices
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasi lh-1 mb-3">
              Software Development
            </h1>
            <p className="lead">
              Exceeding expectations by surpassing benchmarks
            </p>

            <button
              type="button"
              className="btn btn-outline-light px-4 me-md-2 my-5"
              onClick={handleContact}
            >
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>

      <hr className="mx-3 border-2 border-dar opacity-25" />

      <div className="container py-5" ref={cloud}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <p>
              Gone are the days of on-prem servers and as an extension, server
              rooms. We handhold our clients in moving their data to the cloud,
              optimize their cloud spend, and develop architectures that are
              robust to the core. With our cloud managed services, let us handle
              your cloud operations while you handle your business.
            </p>
            <div className="grid gap-3">
              <button className="col-5 btn btn-outline-light m-1">
                Cloud Consulting
              </button>
              <button className="col-5 btn btn-outline-light m-1">
                Cloud Managed Services
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasi lh-1 mb-3">
              Cloud Services
            </h1>
            <p className="lead">
              Enable scalability on-demand with cloud computing
            </p>

            <button
              type="button"
              className="btn btn-outline-light px-4 me-md-2 my-5"
              onClick={handleContact}
            >
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>

      <hr className="mx-3 border-2 border-dar opacity-25" />

      <div className="container py-5" ref={blockchain}>
        <div className="row flex-lg-row-revers align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <p>
              With security and privacy at its core, blockchain technology gives
              the power back to the hands of the users and we develop
              avant-garde dApps, Metaverse spaces, and other solutions that
              revolutionize and transform your business and operations.
            </p>
            <div className="grid gap-3">
              <button className="col-5 btn btn-outline-light m-1">
                NFT Marketplace
              </button>
              <button className="col-5 btn btn-outline-light m-1">
                Metaverse Development
              </button>
              <button className="col-5 btn btn-outline-light m-1">
                App Development
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasi lh-1 mb-3">
              Blockchain Services{" "}
            </h1>
            <p className="lead">The future of the internet is decentralized</p>

            <button
              type="button"
              className="btn btn-outline-light px-4 me-md-2 my-5"
              onClick={handleContact}
            >
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>

      <hr className="mx-3 border-2 border-dar opacity-25" />

      <div className="container py-5" ref={data}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <p>
              In this age of the consumer, all that a company has is data to
              listen to what the customers want. That is why we provide
              next-generation data science and analytics services crunching
              numbers so you won’t have to.
            </p>
            <div className="grid gap-3">
              <button className="col-5 btn btn-outline-light m-1">
                Business Intelligence
              </button>
              <button className="col-5 btn btn-outline-light m-1">
                Data Engineering
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasi lh-1 mb-3">
              Data Science & Analytics
            </h1>
            <p className="lead">They say data is the new oil; we agree!</p>

            <button
              type="button"
              className="btn btn-outline-light px-4 me-md-2 my-5"
              onClick={handleContact}
            >
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>

      <hr className="mx-3 border-2 border-dar opacity-25" />

      <div className="container py-5" ref={ai}>
        <div className="row flex-lg-row-revers align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <p>
              As a futuristic organization, we believe that AI/ML has the
              potential to redefine businesses and processes. We develop
              next-gen AI-based solutions that help businesses thrive and scale
              in this competitive market.
            </p>
            <div className="grid gap-3">
              <button className="col-5 btn btn-outline-light m-1">
                Generative AI
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasi lh-1 mb-3">
              Artificial Intelligence & Machine Learning
            </h1>
            <p className="lead">
              Building solutions surpassing human capabilities
            </p>

            <button
              type="button"
              className="btn btn-outline-light px-4 me-md-2 my-5"
              onClick={handleContact}
            >
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>

      <hr className="mx-3 border-2 border-dar opacity-25" />

      <div className="container py-5" ref={it}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <p>
              As the powerhouse behind many-a-organizations’ success, we provide
              strategic IT consulting services to our clients, enabling them to
              unlock revenue trapped in processes and silos.
            </p>
            <div className="grid gap-3"></div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasi lh-1 mb-3">
              IT Consulting
            </h1>
            <p className="lead">Embracing technology for business resiliency</p>

            <button
              type="button"
              className="btn btn-outline-light px-4 me-md-2 my-5"
              onClick={handleContact}
            >
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>

      <hr className="mx-3 border-2 border-dar opacity-25" />

      <div className="container py-5" ref={devOps}>
        <div className="row flex-lg-row-revers align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <p>
              Engaged in an infinite loop of continuous integration and
              continuous delivery, we speed up the development process and take
              your business on a growth ride as you’ve never witnessed before.
            </p>
            <div className="grid gap-3">
              <button className="col-5 btn btn-outline-light m-1">
                SecOPs
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasi lh-1 mb-3">
              DevOps
            </h1>
            <p className="lead">To Infinity and beyond</p>

            <button
              type="button"
              className="btn btn-outline-light px-4 me-md-2 my-5"
              onClick={handleContact}
            >
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSections;
