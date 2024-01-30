 const mongoose = require('mongoose');
 const scehma = mongoose.Schema


 const course = new scehma({
    name:String,
    title:String,
    description:String,
    price:String,
    time:String,
    foto:String,
    age:String,
    skills:String

})

module.exports = mongoose.model("course" ,course)