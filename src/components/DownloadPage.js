import React from "react";
import { useLoaderData } from "react-router-dom";
import DownloadAccordionItem from "./DownloadAccordionItem";

export default function DownloadPage() {
  const data = useLoaderData();

  const snapshotFiles = data.file_records
    .filter((file) => file.file_type === "snapshot")
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const pipeFiles = data.file_records
    .filter((file) => file.file_type === "pipefiles")
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const covidFiles = data.file_records
    .filter((file) => file.file_type === "covid-19")
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  console.log(snapshotFiles);

  return (
    <div>
      <div>
        <h1>Download AACT</h1>
        <p>
          A static copy of the AACT database is created on the first of each
          month. The most recent and archived <a href="/snapshots">copies</a>{" "}
          are available for download. These can be used to create a local copy
          of a particular instance of the database. A number of query and
          analytic tools (such as SAS, pgAdmin & R) can then be used to connect
          to and query your local copy.
        </p>
        <p>
          For those who prefer to access the data via simple flat files, static
          copies are also available as a{" "}
          <a href="/pipe_files">zipped package of pipe-delimited files</a>.
        </p>
      </div>
      <div className="accordion" id="downloadAccordion">
        <div className="accordion-item">
          <div className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#downloadAccordionCollapseOne"
              aria-expanded="false"
              aria-controls="downloadAccordionCollapseOne"
            >
              <div className="text-center w-100">
                <h3>Static Copy of the Database</h3>
                <div className="text-black">
                  <div>
                    <small>
                      Click here for access to these static copies as well as
                      instructions on how to download and install your own
                      instance of the AACT database.
                    </small>
                  </div>
                  <small>
                    Static copies of the AACT database are created periodically
                    and made available for download.
                  </small>
                </div>
              </div>
            </button>
          </div>
          <div
            id="downloadAccordionCollapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#downloadAccordion"
          >
            <div className="accordion-body">
              <DownloadAccordionItem files={snapshotFiles} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <div className="text-center w-100">
                <h3>Pipe-Delimited Files</h3>
                <div className="text-black">
                  <small>
                    Click here to download a pipe delimited copy of the
                    database. These pipe delimited files are compatible with
                    many data visualization tools like SAS and R.
                  </small>
                </div>
              </div>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse bg-light"
            aria-labelledby="headingTwo"
            data-bs-parent="#downloadAccordion"
          >
            <div className="accordion-body">
              <DownloadAccordionItem files={pipeFiles} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <div className="text-center w-100">
                <h3>Covid-19 Files</h3>
                <div className="text-black">
                  <small>
                    Click here to download spreadsheets for covid-19 studies.
                  </small>
                </div>
              </div>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#downloadAccordion"
          >
            <div className="accordion-body">
              <DownloadAccordionItem files={covidFiles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
