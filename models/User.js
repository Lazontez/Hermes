const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: String,
    password: String,
    email: String ,
    usersbusiness: [
        {
          type: Schema.Types.ObjectId,
          ref: "Businesses"
        }
      ]    
});

const User = mongoose.model("User", userSchema);

module.exports = User;