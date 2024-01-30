const mongoose = require("mongoose")
const schema = mongoose.Schema


const Contect  = new schema({
     Fullname:{
        type:String,
        required:true,
     },
     phoneNumber:{
        type:Number,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     time:{
       type:String,
       required:true
     }

})

module.exports = mongoose.model('contact', Contect)