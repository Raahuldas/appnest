import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact")  
    // contact.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-light border-bottom border-dark fixed-top"
      data-bs-theme=""
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="/images/nav-logo.png"
            alt="Appnest logo"
            className="w-100 h-100 object-fit-cover"
          />
        </Link>
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
            <li className="nav-item mx-lg-4 ">
              <Link to={"/services"} className="text-decoration-none">
                <div className="nav-link pointer">Our Services</div>
              </Link>
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
                  <a className="dropdown-item" href="/docs/terms-and-conditions-pos.pdf">
                    Term & Conditions
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/docs/disclaimer.pdf">
                    Disclaimer
                  </a>
                </li>
                
                <li>
                  <a className="dropdown-item" href="/docs/privacy-policy-pos.pdf">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/docs/cancellation-and-refund-pos.pdf">
                    Cancellation & Refunds Policy
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <button
            className="btn btn-primary px-4 ms-lg-4 me-lg-5"
            onClick={handleContact}
            >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
