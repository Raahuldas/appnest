import React from 'react'

function Header() {
  return (
    <nav
    className="navbar navbar-expand-lg bg-dark border-bottom border-body"
    data-bs-theme="dark"
  >
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="/images/logo.jpeg" alt="Appnest logo" className='w-100 h-100 object-fit-cover'  />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          
          <li className="nav-item mx-lg-4">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item mx-lg-4 dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>          
        
          <button className="btn btn-primary px-4 ms-lg-4 me-lg-5" type="submit">
            Contact Us
          </button>
        
      </div>
    </div>
  </nav>  )
}

export default Header