const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tvSeriesSchema = new Schema({
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
  genre: {
    type: [String],
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
    validate: {
      validator: arr => !!arr.length,
      message: "Genre cannot be empty!"
    }
  },
  rating: {
    type: Number,
    min: [1, "Rating can be from 1 till 10"],
    max: [10, "Rating can be from 1 till 10"]
  },
  createdOn: { type: Date, default: Date.now }
});

tvSeriesSchema.index(
  {
    name: "text",
    plot: "text"
  },
  { weights: { name: 3, plot: 2 } }
);

// set up a mongoose model
module.exports = mongoose.model("TvSeries", tvSeriesSchema);
