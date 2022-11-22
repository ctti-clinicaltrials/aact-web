import React from "react";

export default function DownloadAccordionItem() {
  return (
    <div className="card-body d-flex justify-content-around">
      <div className="col-4">
        <h4>Current Month's Daily Static Copies</h4>
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Select file to download</option>
          <option value="placeholder">placeholder</option>
          <option value="placeholder">placeholder</option>
        </select>
      </div>
      <div className="col-4">
        <h4>Monthly Archive of Static Copies</h4>
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Select file to download</option>
          <option value="placeholder">placeholder</option>
          <option value="placeholder">placeholder</option>
        </select>
      </div>

      <div className="col-3 d-flex align-items-center">
      <a href="/snapshots" className="col-2 ">
          <h5 className="m-0 p-0">Usage Documentation</h5>
      </a>
    </div>
    </div>
  );
}
