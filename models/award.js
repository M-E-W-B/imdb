const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "Award",
  new Schema({
    name: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      enum: [
        "Best Director",
        "Best Actor",
        "Best Actress",
        "Best Supporting Actor",
        "Best Supporting Actress",
        "Best Original Screenplay",
        "Best Adapted Screenplay",
        "Best Production Design",
        "Best Cinematography",
        "Best Costume Design",
        "Best Film Editing",
        "Best Visual Effects",
        "Best Original Score"
      ],
      required: true
    },
    createdOn: { type: Date, default: Date.now }
  })
);
