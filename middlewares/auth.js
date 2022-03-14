const jwt = require("jsonwebtoken")
const auth =(req,res,next)=>{
  const authHeader = req.headers.authorization
  const token = authHeader.split("Bearer ")[1]
  try {
  jwt.verify(token , process.env.jwt)
  next() 
} catch (error) {
  return res.status(401).json({errors:[{msg:error.message}]})
}
}

module.exports = auth

























































// const {User} = require('../models/User');
// const fs = require('fs');

// const setHeader = (token) => {
//     const setToken  = token.substring(7);
//     return setToken; 
// }

// const auth = async(req, res, next) => {
  
//      if (!req.body.user_id){
//         res.status(400).send({status: 0, message: 'User ID field is required!'});
//       }
//       else if (!req.headers.authorization){
//         res.status(400).send({status: 0, message: 'Authentication Field is required'});            
//       }
     
//      else{        
//     const userFind =  await User.findOne({_id: req.body.user_id, user_authentication: setHeader(req.headers.authorization)}); 
//      if(userFind){
//           req.user = userFind;
//           next();
        
//      }else{
//         if(req.file){
//             fs.unlinkSync(req.file.path);
//         }
//         return res.status(400).send({status: 0, message: 'Wrong Auth Token!'});
//      }
//     }
// }

// module.exports = {auth}