import React from 'react'

export default function Footer() {
  return (
    <footer className="py-3 my-4 bg-light">
    <ul className="nav justify-content-around border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="https://ctti-clinicaltrials.org/" target={"blank"} className="nav-link px-2 text-muted">CTTI</a></li>
      <li className="nav-item"><a href="https://ctti-clinicaltrials.org/our-work/quality/state-of-clinical-trials/" target={"blank"} className="nav-link px-2 text-muted">STATE OF CLINICAL TRIALS PROJECT</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">GUIDE FOR RESEARCHERS</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">CONTACT US</a></li>
    </ul>
    <p className='mx-5 text-center'>
      <b>DISCLAIMER</b>: <i>CTTI encourages the use of all materials listed on this site in the pursuit of improving the clinical trials enterprise. Our recommendations, tools, meeting summaries, and more are available to the public for free. We do ask that you acknowledge the source whenever using or referencing CTTI materials. Read our Citation Policy <a href="https://www.ctti-clinicaltrials.org/briefing-room/citation-policy" target="_blank">here.</a></i>
    </p>
    <p className="text-center text-muted">Copyright © CTTI 2016.</p>
  </footer>
  )
}
