const multer  = require("multer");
const jwt = require('jsonwebtoken');


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        if(file.fieldname == 'user_images'){
            cb(null,'./uploads/profile/')
        }
    },
    filename:function(req,file,cb){
        cb(null,new Date().toISOString().replace(/:/g,'-')+file.originalname)
    }
})

function fileFilter(req,file,cb){
    cb(null,true)
    if(file.mimitype === 'image/jpeg' || file.mimitype === 'image/png'){
        cb(null,true)

    }else{
        cb(null,false)
    }
}
const upload = multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*5
    },
    fileFilter:fileFilter
})
const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email         
    },process.env.JWT_SECRET, {
        expiresIn: '30d'
    })   
}

const createToken = (user) => {
   return jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '7d'});
}
module.exports = {upload,generateToken,createToken}