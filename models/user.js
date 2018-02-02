const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "User",
  new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: String,
    password: {
      type: String,
      required: true,
      min: [6, "Please choose password between 6 to 20 characters!"],
      max: [20, "Allowed rating is from 1 till 10!"]
    },
    phoneNumber: {
      type: Number,
      required: true,
      validate: {
        validator: function(v) {
          return /^[6789]\d{9}$/.test(v);
        }
      }
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return /\S+@\S+\.\S+/.test(v);
        }
      }
    },
    createdOn: { type: Date, default: Date.now }
  })
);
