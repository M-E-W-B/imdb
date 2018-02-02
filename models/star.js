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
      validate: {
        validator: function(v) {
          return /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
            v
          );
        },
        message: "Invalid image url!"
      }
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
