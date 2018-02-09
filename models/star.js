const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "Star",
  new Schema({
    name: {
      type: String,
      required: true
    },
    bio: String,
    imageUrl: {
      type: String,
      default: "https://picsum.photos/200/300/?random"
    },
    born: Date,
    profession: [
      {
        type: String,
        enum: [
          "Actor",
          "Director",
          "Writer",
          "Producer",
          "Soundtrack",
          "Cinematographer"
        ],
        required: true
      }
    ],
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true
    },
    createdOn: { type: Date, default: Date.now }
  })
);
