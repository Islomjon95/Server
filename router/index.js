const {Router} = require('express')
const User = require('../model/user')
const course = require("../model/course")
const router = Router()
const multer = require("multer")
const messages = require('../model/messagee')
const messagee = require('../model/messagee')




const storage = multer.diskStorage({
    destination:function(req ,file ,cb){
        return cb(null , './public')
    },
    filename: function (req ,file, cb){
        return cb(null ,`${Date.now()}_${file.originalname}`)
    }
})

    const upload = multer({storage})




router.post("/user", (req ,res)=>{
    // const {username ,phonenumber ,password} = req.body
    console.log(req.body)
 
    const user = new User(req.body)
    user.save()
    .then(data=>console.log(data))
    .catch(err=>console.error(err))
})


router.post("/course" ,upload.single('file'),(req, res)=>{
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const {name ,title ,description,price,time,skills,age} = req.body
    const db = new course({
        name,
        title,
        description,
        price,
        time,
        foto:req.file.path,
        skills,
        age

    })
    db.save()
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
})

router.get("/course", (req ,res)=>{
    course.find({})
    .then(data=>res.json(data))
    .catch(err=>console.log(err))
})

router.post('/courseDelete/:id' ,(req ,res)=>{
    course.findByIdAndDelete(req.params.id)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
})

router.get("/course/:id", (req, res) => {
  const id = req.params.id;

  course.findById(id)
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

router.post('/messages' , (req ,res)=>{
    const db = new messages(req.body)
    db.save()
    .then(data=>res.json(data))
    .catch(err=>console.log(err))
})

router.get('/messages', (req ,res)=>{
     messagee.find({})
     .then(data=>res.json(data))
     .catch(err=>console.log(err))

})
module.exports = router