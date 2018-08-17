import React from "react";

export const Header = props => {
  return <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapsed-on-mobile" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="/">
            A Smol Site
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapsed-on-mobile">
          <ul className="nav navbar-nav navbar-right">
            <li>
            <a className="text-uppercase" href="/about">
                <i className="fas fa-user-astronaut fa-fw" />
                About Me
              </a>
            </li>
            <li>
              <a className="text-uppercase" href="/todo">
                <i className="fas fa-list-alt fa-fw" />
                Things I've Gotta Do
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>;
};
