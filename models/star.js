const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const starSchema = new Schema({
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
  profession: {
    type: [String],
    enum: [
      "Actor",
      "Director",
      "Writer",
      "Producer",
      "Soundtrack",
      "Cinematographer"
    ],
    validate: {
      validator: arr => !!arr.length,
      message: "Profession cannot be empty!"
    }
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true
  },
  createdOn: { type: Date, default: Date.now }
});

starSchema.index(
  {
    name: "text",
    bio: "text"
  },
  { weights: { name: 3, bio: 2 } }
);

// set up a mongoose model
module.exports = mongoose.model("Star", starSchema);
