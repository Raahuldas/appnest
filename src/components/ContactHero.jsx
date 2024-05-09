import React from 'react'

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
              <form className="form-css py-4 borde rounded-3 bg-black px-4 mx-lg-auto mt-5 mt-lg-0">
                <div className="form-floating mb-3 border-bottom border-1">
                  <input
                    type="text"
                    className="form-control border-0 bg-black"
                    id="floatingFullname"
                    placeholder="Full Name"
                  />
                  <label htmlFor="floatingFullname">Full Name</label>
                </div>
                <div className="form-floating mb-3 border-bottom">
                  <input
                    type="email"
                    className="form-control border-0 bg-black"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3  border-bottom bg-black">
                  <input
                    type="text"
                    className="form-control border-0 bg-black"
                    id="floatingContact"
                    placeholder="Contact Number"
                  />
                  <label htmlFor="floatingContact">Contact Number</label>
                </div>
                <div className="form-floating mb-3 border-bottom border-1">
                  <select
                    className="form-select border-0 bg-black text-light"
                    aria-label="Default select example"
                  >
                    <option className="bg-light text-dark" defaultValue>
                      Select a Budget Range
                    </option>
                    <option className="bg-light text-dark" value="1">
                      Between $10k to $50k{" "}
                    </option>
                    <option className="bg-light text-dark" value="2">
                      Between $50k to $100k
                    </option>
                    <option className="bg-light text-dark" value="3">
                      more than $100k
                    </option>
                  </select>
                </div>
                <div className="form-floating mb-3 border-bottom">
                  <input
                    type="text"
                    className="form-control border-0 bg-black"
                    id="floatingProject"
                    placeholder="Project description*"
                  />
                  <label htmlFor="floatingProject">Project descripion*</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" />{" "}
                    <small>Include Copy of a Non-Disclosure Agreement</small>
                  </label>
                </div>
                <button
                  className="w-100 btn btn-lg btn-dark bg-black-subtle mt-4"
                  type="submit"
                >
                  Request Proposal
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>  )
}

export default ContactHero