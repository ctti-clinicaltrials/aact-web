import React from "react";

export default function ConnectPage() {
  return (
    <div>
      <h1>Connect to AACT</h1>
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
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col-sm-4">
          <div className="card h-100 bg-light">
            <div className="card-body">
              <h4 className="card-title">pgAdmin</h4>
              <p className="card-text">
                Click here for instructions on how to use a standard graphical
                user interface to query the cloud-based AACT directly with SQL.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card h-100 bg-light">
            <div className="card-body">
              <h4 className="card-title">R and RStudio</h4>
              <p className="card-text">
                Click here for instructions about how to use R/RStudio to
                analyze the AACT data directly.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card h-100 bg-light">
            <div className="card-body">
              <h4 className="card-title">SAS</h4>
              <p className="card-text">
                Click here for instructions about how to use SAS to analyze the
                AACT data directly.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card h-100 bg-light">
            <div className="card-body">
              <h4 className="card-title">pSQL</h4>
              <p className="card-text">
                Click here to receive instructions on how to use the command
                line PostgreSQL tool to query the cloud-based AACT directly with
                SQL.
              </p>
            </div>
          </div>
        </div>
        <div className="card col-6 bg-dark text-light mx-auto">
            <p><span className="text-info">Hostname:</span>  <span>aact-db.ctti-clinicaltrials.org</span></p>
            <p><span className="text-info">Port:</span>  <span>5432 </span></p>
            <p><span className="text-info">Database name:</span>  <span>aact </span></p>
            <p><span className="text-info">Password:</span>  <span className="text-danger">'your AACT password' </span></p>
        </div>
      </div>
    </div>
  );
}
