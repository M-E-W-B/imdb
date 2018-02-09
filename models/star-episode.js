const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "StarEpisode",
  new Schema({
    episodeId: {
      type: Schema.Types.ObjectId,
      ref: "Episode"
    },
    starId: {
      type: Schema.Types.ObjectId,
      ref: "Star"
    },
    createdOn: { type: Date, default: Date.now }
  })
);
