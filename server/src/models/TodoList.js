var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//schema
var TodoList = new Schema(
  {
    desc: {
      type: String
    },
    status: Boolean
  },
  {
    collection: "Tasks"
  }
);

module.exports = mongoose.model("TodoList", TodoList);
