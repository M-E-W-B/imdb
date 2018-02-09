const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "TvSeries",
  new Schema({
    name: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      default: "https://picsum.photos/200/300/?random"
    },
    yearFrom: {
      type: Number,
      required: true
    },
    yearTo: {
      type: Number
    },
    plot: {
      type: String,
      required: true
    },
    genre: [
      {
        type: String,
        enum: [
          "Action",
          "Adventure",
          "Animation",
          "Biography",
          "Comedy",
          "Crime",
          "Documentary",
          "Drama",
          "Family",
          "Fantasy",
          "History",
          "Horror",
          "Music",
          "Mystery",
          "Romance",
          "Sci-Fi",
          "Short",
          "Sports",
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
