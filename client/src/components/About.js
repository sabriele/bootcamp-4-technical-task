import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <div className="row">
            <div className="col-sm-12 col-md-4" />
            <div className="col-sm-12 col-md-4">
              <br />
              <img
                src="https://scontent-sin6-1.cdninstagram.com/vp/1e40a3ef1100adf0a9fd10eaf91ff153/5C116B2B/t51.2885-19/10785123_1528879254022242_934456209_a.jpg"
                height="100"
                width="100"
                className="img-circle"
                alt=""
              />
              <h3>Sabrina Tjeng</h3>
              <div>
                <form action="https://github.com/sabriele">
                  <button
                    className="btn btn-large"
                    type="submit"
                    value="Go to Github"
                  >
                    <i className="fab fa-github" />
                  </button>
                </form>
                <div className="panel panel-default">
                  <div className="panel-body">
                    <p>
                      I'm a self-taught developer passionate about web and
                      mobile app development, with a particular interest in
                      JavaScript's potential as the future of programming.
                    </p>
                    <p>
                      At the moment, I am working towards my goal of becoming a
                      junior full-stack developer by putting myself through a
                      full time programming self-study regimen, learning both
                      back- and front-end programming with the help of courses
                      on Udemy and Codeacademy. I also regularly challenge
                      myself to apply what I've learnt by solving programming
                      challenges on HackerRank.
                    </p>
                    <p>
                      I do appreciate good design as well, and have worked on
                      creating several UI designs for websites and apps. In my
                      spare time I get excited by other schools of design (from
                      interior, to graphic, to product design) and random bits
                      of trivia (Wikipedia is my go-to bedtime story).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4" />
          </div>
        </div>
      </div>
    );
  }
}
