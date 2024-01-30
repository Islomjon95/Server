const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection
const port = 2000
const cors = require("cors")

mongoose.connect("mongodb+srv://Farki_Dev:farrux1234@newcluster.izih38c.mongodb.net/ITCenter")
db.on("error", ()=>console.log("error"))
db.on('open', ()=>console.log("mongo db running"))
app.use(cors())
app.use(express.json())
app.use(require('./router/index'))
app.use('/public', express.static('public'));

app.listen(port ,()=>console.log('server running'))