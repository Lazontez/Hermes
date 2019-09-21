const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const NewUser = new Schema({
  username: { type: String, required: true, unique: true },
  //[longitude , latitude]
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }

  },
  email: {
    type: String
  },
  interest: {
    interestOne: {
      type: String,
      default: "All"
    },
    interestTwo: {
      type: String,
      default: "All"
    }
  },
});
const User = mongoose.model("User", NewUser);



module.exports = User;
