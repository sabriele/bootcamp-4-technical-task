import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "./components/Header";

import Welcome from "./components/Welcome";
import About from "./components/About";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import UpdateTodo from "./components/UpdateTodo";

import "./index.css";

ReactDOM.render(
  <div style={{ paddingTop: 70 + "px" }}>
    <div className="row">
      <div className="col-xs-12">
        <Header />
      </div>
    </div>
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/todo" component={ListTodo} />
          <Route path="/todo/add" component={AddTodo} />
          <Route path="/todo/update/:id" component={UpdateTodo} />
        </div>
      </Router>
    </div>
  </div>,
  document.getElementById("root")
);
