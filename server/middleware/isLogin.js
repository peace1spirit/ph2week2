const jwt = require('jsonwebtoken')
const UserModel= require('../models/userModel');
const isLogin = (req, res, next) => {
  let token = req.headers.token
  console.log('token',token)
  if (token) {
    let decoded = jwt.verify(token, process.env.SECRET_KEY)
    console.log(decoded.email)
    UserModel.findOne({email:decoded.email})
         .then(result=>{  
            if(result){
              req.curent_user_id=result._id; 
              //req.curent_user_decode=decoded
              next()
            } else {
              res.status(500).json({ message : `access denied`})
            }
         })
         .catch(err=>{
             res.status(500).json({ message: err.message})
         })
  } else {
    res.status(500).json({ message: err.message})
  }
}

module.exports = isLogin