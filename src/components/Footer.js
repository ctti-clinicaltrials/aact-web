import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-light">
      <ul className="nav justify-content-center border-bottom ">
        <li className="nav-item">
          <a
            href="https://ctti-clinicaltrials.org/"
            target={"blank"}
            className="nav-link text-muted"
          >
            <small>CCTI</small>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://ctti-clinicaltrials.org/our-work/quality/state-of-clinical-trials/"
            target={"blank"}
            className="nav-link text-muted"
          >
            <small>STATE OF CLINICAL TRIALS PROJECT</small>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-muted">
            <small>GUIDE FOR RESEARCHERS</small>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-muted">
            <small>CONTACT US</small>
          </a>
        </li>
      </ul>
      <div className="mx-5 text-center">
        <small>
          <b>DISCLAIMER</b>:{" "} 
          <i>
            CTTI encourages the use of all materials listed on this site in the
            pursuit of improving the clinical trials enterprise. Our
            recommendations, tools, meeting summaries, and more are available to
            the public for free. We do ask that you acknowledge the source
            whenever using or referencing CTTI materials. Read our Citation
            Policy{" "} 
            <a
              href="https://www.ctti-clinicaltrials.org/briefing-room/citation-policy"
              target="_blank"
            >
             here.
            </a>
          </i>
        </small>
        </div>
      <div className="text-center text-muted"><small>Copyright © CTTI 2016.</small></div>
    </footer>
  );
}
