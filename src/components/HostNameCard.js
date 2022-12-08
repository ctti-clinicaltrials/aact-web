import React from "react";

export default function HostNameCard() {
  return (
    <div className="card col-6 bg-dark text-light mx-auto">
      <p>
        <span className="text-info">Hostname:</span>{" "}
        <span>aact-db.ctti-clinicaltrials.org</span>
      </p>
      <p>
        <span className="text-info">Port:</span> <span>5432 </span>
      </p>
      <p>
        <span className="text-info">Database name:</span> <span>aact </span>
      </p>
      <p>
        <span className="text-info">Password:</span>{" "}
        <span className="text-danger">'your AACT password' </span>
      </p>
    </div>
  );
}
