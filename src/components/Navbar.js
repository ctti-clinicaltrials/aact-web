import React from "react";
import image from "../images/full_logo.jpg";

export default function Navbar() {
  return (
    <nav className="navbar sticky-top bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.ctti-clinicaltrials.org/">
          <img src={image} alt="Bootstrap" width="200" height="80" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Hi, Ievgen D.
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="connect">
                  Connect
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="download">
                  Download
                </a>
              </li>
              <li>
                <div className="nav-item" id="learnAccordion">
                  <div className="accordion-item">
                    <div className="accordion-header" id="learnHeading">
                      <a
                        className="nav-item collapsed nav-link"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Learn More About AACT
                      </a>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="learnHeading"
                        data-bs-parent="#learnAccordion"
                      >
                        <div class="accordion-body mx-4">
                          <li>
                            <a className="nav-link" href="#">
                              Database Schema
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="#">
                              Data Dcitionary
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="#">
                              Database Update Schedule
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="#">
                              Release Notes
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="#">
                              AACT Before November 15, 2021
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="shared_data">
                  Shared Data
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
