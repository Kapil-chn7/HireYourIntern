const express=require('express')
const route=express.Router()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const registerSchema=require('../../RegisterAndLoginDatabase/registerDatabase')
route.post('/',async(req,res)=>{
    var errors=[];


            if(req.body.userOTP == req.session.userData.OTP){
              
                registerSchema.findOne({'userEmail':req.body.userEmail},async(err,user)=>{


                    if(err){
                       
                    }
                    else{
                        if(!user){
                            console.log('user doesnot exist');
                            await bcrypt.hash(req.body.userPassword,10,async (error,hashed)=>{
                                if(error){
                                  
                                    errors.push("Something went wrong");
                                    res.status(403).send(errors);
                                }
                                else{
                                    const data=new registerSchema({
                                    
                                        userEmail:req.body.userEmail,
                                        userPassword:hashed
                                    })
                               
                                   
                                    await data.save()
                                    .then((resp)=>{

                                       console.log("resp",resp._id.toJSON());
                                       jwt.sign({token:resp._id.toJSON()},'skdjanldfnmlasmfalkfsalkfas',{expiresIn: '30m' } ,(err, token)=>{
                                           if(err){
                                               
                                                res.sendStatus('500')
                                           }
                                           else{
                                               
                                              const refreshToken= jwt.sign({refreshToken:resp._id.toJSON()},'sadfkjashdkjkfdakjllkf',{expiresIn:'7d'})
                                               
                                               res.cookie('cookieName', token, {httpOnly: true });
                                               res.cookie('refreshToken',refreshToken,{httpOnly:true})
                                               res.sendStatus(201);
                                           }
                                       })
                                       
                                    })
                                    .catch(error=>{
                                        errors.push("Something went wrong in catch");
                                     
                                        res.status(500).send(errors);
                                    })
                                    
                                }
                            })
                        }
                        else{
                          
                            console.log("user exist",user)
                        }
                    }
                })
                 
            }
            else{
                console.log("OTP is incorrect");
                errors.push("OTP is incorrect");
                res.status(400).send(errors)
            }

})


module.exports=route;


