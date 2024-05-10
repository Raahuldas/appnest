import React from 'react'

function CareerHero() {
  return (
<div className=" text-secondary text-lg-center hero-career position-relative pt-3 overflow-hidden ">
      <img
        src="https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-100 h-100 object-fit-cover z-n1 position-absolute start-0 "
      />

      <div className="py-5 px-2 px-lg-0 mt-5">
        <h1 className="display-1 fw-semibold text-white my-5 py-5 ps-5">
          Career
        </h1>
        <div className="col-lg-6 mx-lg-auto">
          <p className="fs-5 mb-4 text-light"></p>
        </div>
      </div>
    </div>  )
}

export default CareerHero