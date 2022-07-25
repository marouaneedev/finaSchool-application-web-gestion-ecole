import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbarHome">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand logo">
            <img src="/images/logo.png" className="logoIiimg" alt="img" />
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="schoolSection"
                  smooth={true}
                  duration={200}
                >
                  School
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="formationSection"
                  smooth={true}
                  duration={200}
                >
                  Formation
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="inscriptionSection"
                  smooth={true}
                  duration={200}
                  offset={50}
                >
                  Pre inscription
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="contactSection"
                  smooth={true}
                  duration={200}
                  offset={50}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
