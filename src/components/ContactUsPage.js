import React from "react";

export default function ContactUsPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <h4>Form to submit Issues/Requests</h4>
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shrsjLUxT5X7Sabi4?backgroundColor=orange"
        frameborder="0"
        onmousewheel=""
        width="50%"
        height="533"
        style={{ background: "transparent", border: "1 px solid #ccc" }}
      ></iframe>
      <h4 className="mt-3">Status of Issues/Requests</h4>
      <p>
        If you discover an issue please see if there is a similar issue that we
        are working on already. If there isn't please fill out the form below
        and let us know about it.
      </p>
      <p>
        {" "}
        If you have an inquiry that is not related to AACT please contact CTTI
        directly <a href="https://ctti-clinicaltrials.org/contact-us/">here</a>.
      </p>
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shrmhjOdSzZ9WLqd6?backgroundColor=orange&viewControls=on"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
    </div>
  );
}
