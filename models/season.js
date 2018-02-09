const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "Season",
  new Schema({
    sequence: {
      type: Number,
      required: true,
      min: [1, "Season no. cannot be less than 1"]
    },
    year: {
      type: Number,
      required: true
    },
    plot: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: [1, "Rating can be from 1 till 10"],
      max: [10, "Rating can be from 1 till 10"]
    },
    createdOn: { type: Date, default: Date.now }
  })
);
