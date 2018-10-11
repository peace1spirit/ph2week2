var express = require('express');
var router = express.Router();
var cors = require('cors')
const axios = require('axios')
const jwt = require('jsonwebtoken')
const CLIENT_ID="151224793788-4r8plfdiothhuoc6rhu797no88ebcu7b.apps.googleusercontent.com";
const isLogin = require('../middleware/isLogin')
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client(CLIENT_ID);

const UserModel=require('../models/userModel')
const EventModel=require('../models/eventModel')

router.post('/users/register',function(req, res){

        console.log('register')
        UserModel.create({ //jika register
            name: req.body.name, 
            email: req.body.email,
            password: req.body.password
        })
        .then(result=>{
             res.status(201).json({success:true,message:"Account helo registered"}) 

        })      
        .catch(err=>{
            res.status(500).json({message:err.message})
        })           
    
})




router.post('/users/login',function(req, res){

      UserModel.findOne({email:req.body.email,password:req.body.password})
      .then(result=>{
          if(result){
              console.log(result.name +' ' +result.email)
              const payload={
                  name: result.name, 
                  email: result.email
              };   
              let token=jwt.sign(payload,process.env.SECRET_KEY)
              res.status(201).json({token:token})                  
          }
          else{
              res.status(201).json({token:null})
          }
      })
      .catch(err=>{
          res.status(500).json({message:err.message})
      })        

})


router.post('/events/search',function(req, res){
    console.log('search event')
    console.log(req.body.search)
    EventModel.find({name:new RegExp(req.body.search, 'i')})
    .then(result=>{
        res.status(201).json({data:result}) 
    })      
    .catch(err=>{
        res.status(500).json({message:err.message})
    })   

})

router.post('/events',isLogin,function(req, res){
      console.log('create event')

      EventModel.create({ //jika register
          name: req.body.name, 
          location: req.body.location,
          address: req.body.address,
          user:req.curent_user_id
          //user:req.body.user
      })
      .then(result=>{
          res.status(201).json({success:true,message:"Event already add"}) 
      })      
      .catch(err=>{
          res.status(500).json({message:err.message})
      })   

})

router.get('/events',function(req, res){
    console.log('get event')
    EventModel.find({})
    .then(result=>{
        res.status(201).json({data:result}) 
    })      
    .catch(err=>{
        res.status(500).json({message:err.message})
    })   

})
router.delete('/events',isLogin,function(req, res){
    console.log('delete event')
    EventModel.deleteOne({ _id: req.body.id})
    .then(result=>{     
        res.status(201).json({"success": true,"message": `Event with id ${result._id} deleted`}) 
    })      
    .catch(err=>{
        res.status(500).json({message:err.message})
    })   

})

module.exports = router;
