const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "TvSeriesSeason",
  new Schema({
    seasonId: {
      type: Schema.Types.ObjectId,
      ref: "Season"
    },
    tvseriesId: {
      type: Schema.Types.ObjectId,
      ref: "TvSeries"
    },
    createdOn: { type: Date, default: Date.now }
  })
);
