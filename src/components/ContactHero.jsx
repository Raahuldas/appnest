import React from 'react'
import ContactUsForm from './ContactUsForm'

function ContactHero() {
  return (
<div className=" bg-dark-subtl text-light contact-hero">
        <div className="container py-5">
          <div className="row align-items-center g-lg-5 py-5 ">
            <div className="col-lg-6 text-center text-lg-start text-light">
              <h1 className="display-4 fw-semibold lh-1 text-white mb-3">
                Kickstart Your Digital Journey Today
              </h1>
              <p className="col-lg-10 fs-5">
                Get all your questions answered by our business development
                team.
              </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-6">
              <ContactUsForm/>
            </div>
          </div>
        </div>
      </div>  )
}

export default ContactHero