import React from "react";

export default function HomePage() {
  return (
    <div>
      <div className="header">
        <h1>
          Improving Public Access to Aggregate Content of ClinicalTrials.gov
        </h1>
        <h3>What is AACT?</h3>
        <p>
          AACT is a publicly available relational database that contains all
          information (protocol and result data elements) about every study
          registered in ClinicalTrials.gov. Content is downloaded from
          ClinicalTrials.gov daily and loaded into AACT. The Clinical Trials
          Transformation Initiative (CTTI) enhanced AACT in October, 2016 to
          include the following features:
        </p>
      </div>
      <ul className="list-group list-group-flush w-50 mx-auto">
        <li className="list-group-item"> Database content refreshed daily</li>
        <li className="list-group-item">
          Database directly accessible in the cloud
        </li>
        <li className="list-group-item">
          Static copies of the database available for download
        </li>
        <li className="list-group-item">
          Open source tools freely available (postgreSQL, Ruby on Rails, Tableau
          Public)
        </li>
        <li className="list-group-item">
          A Source code available via{" "}
          <a
            href="https://github.com/ctti-clinicaltrials/aact"
            target={"blank"}
          >
            Github
          </a>
        </li>
      </ul>

      <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
        <a
          href="https://www.ctti-clinicaltrials.org/briefing-room/publications"
          target="_blank"
          className="text-decoration-none col"
        >
          <div className="card h-100 h-20 text-bg-info t-white bg-tertiary">
            <div className="card-header">
              <small>PRACTICAL INFO FOR RESEARCHERS AND ANALYSTS</small>
            </div>
            <div className="card-body d-flex align-items-end">
              <h5>
                Researcher's Guide to Using AACT
              </h5>
            </div>
          </div>
        </a>
        <a
          href="https://www.ctti-clinicaltrials.org/briefing-room/publications"
          target="_blank"
          className="text-decoration-none col"
        >
          <div className="card h-100 h-20 t-grey text-bg-light  ">
            <div className="card-header card-text">
              <small>NEWS</small>
            </div>
            <div className="card-body d-flex align-items-end">
              <h5>
                Related Publications
              </h5>
            </div>
          </div>
        </a>
        <a
          href="https://www.bmj.com/content/361/bmj.k1452"
          target="_blank"
          className="text-decoration-none col"
        >
          <div className="card h-100 h-20 bg-primary t-white">
            <div className="card-header card-text">
              <small>PRACTICAL ADVICE</small>
            </div>
            <div className="card-body d-flex align-items-end">
              <h5>
                How to avoid common problems when using ClinicalTrials.gov in
                research
              </h5>
            </div>
          </div>
        </a>
      </div>
      <p>
        As a cloud-hosted PostgreSQL database, AACT can be directly accessed via
        standard query & analytic tools. Several popular tools, such as pgAdmin
        and RStudio, are free and relatively easy to install and configure.
        Other proprietary tools are popular and provide powerful analytic and/or
        relational database utility; these tools include SAS, Toad, and Tableau.
        In many cases, access is a matter of installing the software package,
        configuring it to use PostgreSQL, and providing AACT connection
        credentials.
      </p>
    </div>
  );
}
