const express=require('express');
const  route=express.Router()
const database=require('../../RegisterAndLoginDatabase/UserdataDatabase/userProfileDB')
const database2=require('../../RegisterAndLoginDatabase/registerDatabase')
const jwt=require('jsonwebtoken')
route.get('/',(req,res)=>{
    console.log("this is me")
    console.log('req.params',req.cookies['refreshToken']);


   var jwtvalue=jwt.decode(req.cookies['cookieName'],{complete: true})
   console.log("jwt vlaue", jwtvalue.payload.token);
   const userIdValue=jwtvalue.payload.token;
   database.findOne({_id:userIdValue},(err,user)=>{
       if(err) {
           console.log("THis is the eror",err)
           res.sendStatus(500);
       }
        else if(!user){

            database2.findOne({_id:userIdValue},(err,uservalue)=>{
                if(err){
                    res.sendStatus(500);
                }
                else if(uservalue){

                    console.log("uservalue",uservalue.userEmail);

                    const userProfiledata=new database();
                    userProfiledata._id=userIdValue;
                    userProfiledata.userProfileData={
                        userEmail:uservalue.userEmail
                    }
                    userProfiledata.save()
                    .then((user)=>{
                        console.log("user",user);
                        res.send(user);
                    })
                    .catch(err=>{
                        console.log("this is the error",err);
                        res.sendStatus(500)
                    })

                }
                else if(!user){
                    res.sendStatus(500);
                }
            })
        
       }
      else if(user){
           console.log("This is the user",user);
           res.send(user);
       }
       
   })



   

  })

  module.exports=route