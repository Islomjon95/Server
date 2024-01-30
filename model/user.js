const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email: {
        type: String,
  
    },
    password: {
        type: String,
   
    },
    phonenumber: {
        type: String,
       
    }
});

module.exports = mongoose.model("User", UserSchema);
