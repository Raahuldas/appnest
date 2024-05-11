import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function CareerForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dixjunh', 'template_zgv7jv3', form.current, {
        publicKey: 'iSGFN1Lfp7vPxa7Ru',
      })
      .then(
        () => {
          alert("Application sent successfully")
          console.log('SUCCESS!');
        },
        (error) => {
          alert("Failed..",error.text)
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container py-5">
        <h1 className="text-center">Drop Your Resume Here</h1>
      <div className="row flex-lg-row-revers align-items-center g-5 py-5">
        
        <div className="col-lg-6">
          <img src="/images/resume.jpg" alt="" />
        </div>
        <div className="col-10 col-sm-8 col-lg-6 px-lg-5">
          <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary form-css" onSubmit={sendEmail} ref={form}>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingName"
                placeholder="Name"
                name='from_name'
              />
              <label for="floatingName">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="Email"
                name='from_email'
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingPhone"
                placeholder="Phone Number"
                name='phone'
              />
              <label for="floatingPhone">Phone Number</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingApply"
                placeholder="Applied For"
                name='job_role'
              />
              <label for="floatingApply">Applied For</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="file"
                class="form-control"
                id="floatingResume"
                placeholder="Resume"
                name='resume'
              />
              <label for="floatingResume">Resume</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Submit
            </button>
          </form>
          <div className="grid gap-3"></div>
        </div>

      </div>
    </div>
  );
}

export default CareerForm;
