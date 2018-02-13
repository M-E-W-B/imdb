const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema({
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
    unique: true,
    validate: {
      validator: function(v) {
        return /^[6789]\d{9}$/.test(v);
      }
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /\S+@\S+\.\S+/.test(v);
      }
    }
  },
  createdOn: { type: Date, default: Date.now }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// set up a mongoose model
module.exports = mongoose.model("User", userSchema);
