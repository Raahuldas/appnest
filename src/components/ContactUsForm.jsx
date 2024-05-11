import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactUsForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4rb9e3t", "template_isrg8ar", form.current, {
        publicKey: "iSGFN1Lfp7vPxa7Ru",
      })
      .then(
        () => {
            alert("Successfully sent")
          console.log("SUCCESS!");
        },
        (error) => {
            alert("failed")
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      className="form-css py-4 borde rounded-3 bg-black px-4 mx-lg-auto mt-5 mt-lg-0"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="form-floating mb-3 border-bottom border-1">
        <input
          type="text"
          className="form-control border-0 bg-black text-light"
          id="floatingFullname"
          placeholder="Full Name"
          name="full_name"
        />
        <label htmlFor="floatingFullname">Full Name*</label>
      </div>
      <div className="form-floating mb-3 border-bottom">
        <input
          type="email"
          className="form-control border-0 bg-black text-light"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
        />
        <label htmlFor="floatingInput">Email address*</label>
      </div>
      <div className="form-floating mb-3  border-bottom bg-black">
        <input
          type="text"
          className="form-control border-0 bg-black text-light"
          id="floatingContact"
          placeholder="Contact Number"
          name="contact"
        />
        <label htmlFor="floatingContact">Contact Number*</label>
      </div>
      <div className="form-floating mb-3 border-bottom border-1">
        <select
          className="form-select border-0 bg-black text-light"
          aria-label="Default select example"
          name="budget"
        >
          <option className="bg-light text-dark" defaultValue>
            Select a Budget Range*
          </option>
          <option className="bg-light text-dark" value="Between $10k to $50k">
            Between $10k to $50k{" "}
          </option>
          <option className="bg-light text-dark" value="Between $50k to $100k">
            Between $50k to $100k
          </option>
          <option className="bg-light text-dark" value="more than $100k">
            more than $100k
          </option>
        </select>
      </div>
      <div className="form-floating mb-3 border-bottom">
        <input
          type="text"
          className="form-control border-0 bg-black text-light"
          id="floatingProject"
          placeholder="Project description"
          name="project"
        />
        <label htmlFor="floatingProject">Project descripion*</label>
      </div>

      <button
        className="w-100 btn btn-lg btn-dark bg-black-subtle mt-4"
        type="submit"
      >
        Request Proposal
      </button>
    </form>
  );
}

export default ContactUsForm;
