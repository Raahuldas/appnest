import React from 'react'

function Header({services, contact}) {

  const handleScrollServices = ()=>{
    services.current.scrollIntoView({behavior:"smooth"});
  }

  const handleScrollContact = ()=>{
    contact.current.scrollIntoView({behavior:"smooth"});
  }

  return (
    <nav
    className="navbar navbar-expand-lg bg-light border-bottom border-dark fixed-top"
    data-bs-theme=""
  >
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="/images/nav-logo.png" alt="Appnest logo" className='w-100 h-100 object-fit-cover'/>
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
              About Us
            </a>
          </li>
          <li className="nav-item mx-lg-4">
            <div className="nav-link pointer" onClick={handleScrollServices}>
              Our Services
            </div>
          </li>
          <li className="nav-item mx-lg-4 dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Portfolio
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
          <li className="nav-item mx-lg-4 dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Career
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
          <li className="nav-item mx-lg-4 dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Legal Documents
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
        
          <button className="btn btn-primary px-4 ms-lg-4 me-lg-5" onClick={handleScrollContact} >
            Contact Us
          </button>
        
      </div>
    </div>
  </nav>  )
}

export default Header