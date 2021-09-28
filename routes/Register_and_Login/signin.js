const express=require('express')
const route=express.Router()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const database=require('../../RegisterAndLoginDatabase/registerDatabase')
route.post('/',(req,res)=>{
    console.log("Inside of signin")
        database.findOne({'userEmail':req.body.userEmail},async(err,user)=>{

            console.log("Inside of signinsdf")
            if(err){
                console.log("this is an error",err);
                res.send(403);
            }
            else{
                if(user){
                    console.log("Insid eof user");
                        bcrypt.compare(req.body.userPassword, user.userPassword,(err,value)=>{
                            if(err){
                                console.log("THis is the error");
                                res.sendStatus(500)
                            }
                            else{
                                console.log("signin is",value);
                                if(value==true){
                                  const token=  jwt.sign({token:user._id.toJSON()},'skdjanldfnmlasmfalkfsalkfas',{expiresIn: '5h' });
                                  const refreshToken= jwt.sign({refreshToken:user._id.toJSON()},'sadfkjashdkjkfdakjllkf',{expiresIn:'7d'})
                                               
                                               res.cookie('cookieName', token, {httpOnly: true });
                                               res.cookie('refreshToken',refreshToken,{httpOnly:true});
                                              
                                 
                                    res.sendStatus(201);
                                }
                                if(value==false){
                                    res.sendStatus(403)
                                }
                            }
                        })
                }
                if (!user){
                    console.log("Inside of user not",user)
                    res.sendStatus(403);
                }
            }
        })
})

module.exports=route