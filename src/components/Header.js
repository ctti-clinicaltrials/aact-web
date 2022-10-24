import React from "react";
import image from "../images/full_logo.jpg";
import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <div>
      <div className="navbar navbar-expand-lg py-3 ">
        <header className="container">
          <a
            className="navbar-brand"
            href="https://www.ctti-clinicaltrials.org/"
          >
            <img src={image} alt="Bootstrap" width="200" height="80" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <HeaderLink
              color={"#ec3e37"}
              title={"Home"}
              url={"/"}
              classes={"nav-svg"}
            />
            <HeaderLink
              color={"#b71417"}
              title={"Connect"}
              url={"/connect"}
              classes={"nav-svg nav-svg-no-margin"}
            />
            <HeaderLink
              color={"#680001"}
              title={"Download"}
              url={"/download"}
              classes={"nav-svg nav-svg-no-margin"}
            />
            <HeaderLink
              color={"#57585c"}
              title={"Learn"}
              url={"/learn"}
              classes={"nav-svg nav-svg-no-margin"}
            />
            <HeaderLink
              color={"#26657a"}
              title={"Shared Data"}
              url={"/shared_data"}
              classes={"nav-svg nav-svg-no-margin"}
            />
            <HeaderLink
              color={"#008aa1"}
              title={"Contact Us"}
              url={"/contact"}
              classes={"nav-svg nav-svg-no-margin"}
            />
            <div className="d-flex flex-column ">
              <a href="/sign_in">
                <div className="d-flex align-items-start nav-svg nav-svg-no-margin ">
                  <svg height="37" width="175">
                    <polygon
                      points="0,0 150,0 175,37 25,37"
                      style={{ fill: "#02b7d4" }}
                    />
                    <text x="50%" y="50%" className="svg-text">
                      Sign In
                    </text>
                  </svg>
                </div>
              </a>
              <a href="/sign_up">
                <div className=" d-flex align-items-end nav-svg nav-svg-no-margin ">
                  <svg height="37" width="175">
                    <polygon
                      points="25,0 175,0 150,37 0,37"
                      style={{ fill: "#02b7d4" }}
                    />
                    <text x="50%" y="50%" className="svg-text">
                      Sign up
                    </text>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </header>
      </div>
      
    </div>
  );
}
