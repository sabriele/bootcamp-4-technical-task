// Libraries
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

// Server Configuration
var basePath = "/todo";
var port = process.env.PORT || 5000;

// Connection to DB
var url = process.env.DATABASEURL || "mongodb://localhost/bootcamp-4-todolist";
mongoose
  .connect(url)
  .then(() => {
    console.log("Backend Started");
  })
  .catch(err => {
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
app.listen(port, () => {
  console.log("TodoList Backend running on Port: ", port);
});
