const mongoose = require('mongoose');
const scehma = mongoose.Schema


const messages = new scehma({
   courseID:mongoose.Schema.Types.ObjectId,
   fullname:String,
   phonenumber:String,
   messages:String,
   course:String,
   selectedTime: String,
   

}, { timestamps: true })

module.exports = mongoose.model("messages" ,messages)
