var express = require("express");
var app = express();
var router = express.Router();
import path from "path";

// Schema
var TodoList = require("../models/TodoList");

const staticFiles = express.static(path.join(__dirname, "../../../client/build"));

app.use(staticFiles);

// Get Specific Item
router.route("/:id").get(function(req, res) {
  var id = req.params.id;
  TodoList.findById(id, function(err, item) {
    res.json(item);
  });
});

// Get All Items
router.route("/").get(function(req, res) {
  TodoList.find(function(err, items) {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
  });
});

// Add Item
router.route("/add").post(function(req, res) {
  var item = new TodoList(req.body);
  item
    .save()
    .then(item => {
      res.json("Added");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

//  Update Specific Item
router.route("/update/:id").post(function(req, res) {
  TodoList.findById(req.params.id, function(err, item) {
    if (!item) return next(new Error("Could not load Document"));
    else {
      item.desc = req.body.desc;

      item
        .save()
        .then(item => {
          res.json("Updated");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Delete Specific Item
router.route("/delete/:id").get(function(req, res) {
  TodoList.findByIdAndRemove({ _id: req.params.id }, function(err, item) {
    if (err) res.json(err);
    else res.json("Deleted");
  });
});

module.exports = router;
