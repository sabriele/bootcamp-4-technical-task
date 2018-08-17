"use strict";

//Libraries
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

//server configuration
var basePath = "/todo";
var port = process.env.PORT || 5000;

// Connection to DB
mongoose.connect("mongodb://localhost/todolist-reactjs" || "mongodb://mongodb").then(function () {
  console.log("Backend Started");
}).catch(function (err) {
  console.error("Backend error:", err.stack);
  process.exit(1);
});

// Routes and Backend Funcioncalities
var todoListRoutes = require("./src/routes/todoListRoutes");

// App Instance
var app = express();
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(basePath, todoListRoutes);

// Execute App
app.listen(port, function () {
  console.log("TodoList Backend running on Port: ", port);
});