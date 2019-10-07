
//Require Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//This is the model for a new business 
const NewBusiness = new Schema({
  BusinessName: {
    type: String,
    required: true,
    unique: false
  },
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  //[longitude , latitude]
  location: {
    type: {
      type: String, 
      enum: ['Point'], 
      default : 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }

  },
  Niche: {
    type: String,
    required: true,
    // minlength: 1,
    // maxlength: 3

  },
  CompanyBio: {
    type: String,
    minlength: 300,
    maxlength: 600
  },
  CompanyWebsite: {
    type: String,
    default: "Company website not available"
  }
});

NewBusiness.index({
  location : "2dsphere"
})

//Declare the the new business model as a model in mongoose
const Businesses = mongoose.model("Businesses", NewBusiness);

// console.log(Business)
module.exports = Businesses;
