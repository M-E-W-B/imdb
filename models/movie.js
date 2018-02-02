const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "Movie",
  new Schema({
    name: {
      type: String,
      required: true
    },
    plot: {
      type: String,
      required: true
    },
    releaseDate: Date,
    runtime: Number,
    genre: [
      {
        type: String,
        enum: [
          "Action",
          "Adventure",
          "Comedy",
          "Crime",
          "Drama",
          "Historical",
          "Horror",
          "Musicals",
          "Science Fiction",
          "Thriller",
          "War",
          "Western"
        ],
        required: true
      }
    ],
    rating: {
      type: Number,
      min: [1, "Rating can be from 1 till 10"],
      max: [10, "Rating can be from 1 till 10"]
    },
    createdOn: { type: Date, default: Date.now }
  })
);
