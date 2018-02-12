const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "SeasonEpisode",
  new Schema({
    seasonId: {
      type: Schema.Types.ObjectId,
      ref: "Season"
    },
    episodeId: {
      type: Schema.Types.ObjectId,
      ref: "Episode"
    },
    createdOn: { type: Date, default: Date.now }
  })
);
