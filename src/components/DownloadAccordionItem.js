import React from "react";
import { Link } from "react-router-dom";
import DownloadLink from "react-download-link";

export default function DownloadAccordionItem(files) {

  const hadnleChange = (e) => {
    window.location = e.target.value;
    console.log(e.target.value);
  };


  const getDate = (time) => {
    const date = new Date(time)
    return date.toLocaleDateString('en-US')
  }

  return (
    <div className="card-body d-flex justify-content-around">
      <div className="col-4">
        <h4>Current Month's Daily Static Copies</h4>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={hadnleChange}
        >
          <option defaultValue>Select file to download</option>
          {files.files.map((file) => {
            return (
              <option key={file.id} value={file.url}>
                {getDate(file.created_at)}
              </option>
            );
          })}
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
