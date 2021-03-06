const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "Episode",
  new Schema({
    name: {
      type: String,
      required: true
    },
    sequence: {
      type: Number,
      required: true,
      min: [1, "Episode no. cannot be less than 1"]
    },
    plot: {
      type: String,
      required: true
    },
    runtime: Number,
    rating: {
      type: Number,
      min: [1, "Rating can be from 1 till 10"],
      max: [10, "Rating can be from 1 till 10"]
    },
    createdOn: { type: Date, default: Date.now }
  })
);
