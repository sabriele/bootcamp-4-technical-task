import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome-overlay">
        <div className="welcome-site-wrapper">
          <div className="welcome-site-wrapper-inner">
            <div className="welcome-cover-container">
              <div className="welcome-inner welcome-cover">
                <h1 className="welcome-cover-heading">Hi everyone!</h1>
                <p className="lead">
                  My name is <strike>Earl</strike> Sabrina
                </p>
                  <a href="/about" className="btn btn-lg welcome-btn-default">
                    GET TO KNOW ME!
                  </a>
                  <a href="/todo" className="btn btn-lg welcome-btn-default">
                    SEE MY TODO LIST
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
