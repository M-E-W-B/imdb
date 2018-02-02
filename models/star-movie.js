const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "StarMovie",
  new Schema({
    movieId: {
      type: Schema.Types.ObjectId,
      ref: "Movie"
    },
    starId: {
      type: Schema.Types.ObjectId,
      ref: "Star"
    },
    createdOn: { type: Date, default: Date.now }
  })
);
