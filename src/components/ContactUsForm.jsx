import axios from "axios";
import React from "react";

function ContactUsForm() {
  const handleSubmitContactForm = async (e) => {
    e.preventDefault();
    console.log(e);

    try {
      await axios.post("http://localhost:8000/api/v1/contacts/create", {
        fullname: e.target.elements.fullname.value,
        contact: e.target.elements.contact.value,
        email: e.target.elements.email.value,
        budget: e.target.elements.budget.value,
        project: e.target.elements.project.value,
      });

      alert("sent succesfully !");
    } catch (error) {
      alert("Failed !!!");
      console.log(error);
    }
  };
  return (
    <form
      className="form-css py-4 borde rounded-3 bg-black px-4 mx-lg-auto mt-5 mt-lg-0"
      onSubmit={(e) => handleSubmitContactForm(e)}
    >
      <div className="form-floating mb-3 border-bottom border-1">
        <input
          type="text"
          className="form-control border-0 bg-black text-light"
          id="floatingFullname"
          placeholder="Full Name"
          name="fullname"
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
