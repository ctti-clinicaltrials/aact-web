import React from "react";
import useGetDate from "../hooks/useGetDate";
import useGetFileSize from "../hooks/useGetFileSize";

export default function DownloadAccordionItem(files) {
  const handleChange = (e) => {
    window.location = e.target.value;
    console.log(e.target.value);
  };

  const GetFileSize = (size) => {
    return useGetFileSize(size);
  };

  const GetDate = (timestamp) => {
    return useGetDate(timestamp);
  };

  const currentTime = new Date();
  const currentYear = new Date(currentTime).getFullYear();
  const currentMonth = new Date(currentTime).getMonth();
  const startCurrentMonth = new Date(currentYear, currentMonth, 1);
  const dailyFilteredFiles = files.files.filter(
    (file) => new Date(file.created_at).getTime() > startCurrentMonth.getTime()
  );
  const monthlyFilteredFiles = files.files.filter(
    (file) => new Date(file.created_at).getTime() < startCurrentMonth.getTime()
  );

  return (
    <div className="card-body d-flex justify-content-around">
      <div className="col-4">
        <h4>Current Month's Daily Static Copies</h4>
        <select
          className="form-select d-flex"
          aria-label="Default select example"
          onChange={handleChange}
        >
          <option defaultValue className="justify-content-center">
            Select file to download
          </option>
          {dailyFilteredFiles.map((file) => {
            return (
              <option key={file.id} value={file.url} className="mx-auto">
                {GetDate(file.created_at)} {GetFileSize(file.file_size)}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-4">
        <h4>Monthly Archive of Static Copies</h4>
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>Select file to download</option>
          {monthlyFilteredFiles.map((file) => {
            return (
              <option key={file.id} value={file.url} className="mx-auto">
                {GetDate(file.created_at)} {GetFileSize(file.file_size)}
              </option>
            );
          })}
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
