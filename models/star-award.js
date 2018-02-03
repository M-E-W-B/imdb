const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "StarAward",
  new Schema({
    awardId: {
      type: Schema.Types.ObjectId,
      ref: "Award"
    },
    starId: {
      type: Schema.Types.ObjectId,
      ref: "Star"
    },
    createdOn: { type: Date, default: Date.now }
  })
);
