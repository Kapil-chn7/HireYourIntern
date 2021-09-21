const express=require('express')
const jwt=require('jsonwebtoken')
const route=express.Router()

route.post('/',(req,res)=>{
    console.log("Inside of vlaue",req.body)
    if(!req.body.usertoken){
        console.log("Inside of vlaue111111",req.body.usertoken)
        res.sendStatus(403);
    }
    if(req.body.usertoken){
        jwt.verify(req.body.usertoken, 'sadfkjashdkjkfdakjllkf',(err,value)=>{
            if(err){
                console.log("refresh token is invalid",err);
                res.sendStatus(403)
            }
            else{
    
                try{
                   const value= jwt.decode(req.body.usertoken,{complete:true})
                    console.log("value",value.header,value.payload.refreshToken)
                    
                    const token= jwt.sign({token:value.payload.refreshToken},'skdjanldfnmlasmfalkfsalkfas',{expiresIn: '30m' },(err,val)=>{
                        if(err){
                            console.log("errrrrrrrrrrrrrrrrrrrrrr",err);
                            res.sendStatus(403)
                        }
                        else{
                            console.log("valueooooooooooooooook",val);
                          
                            res.send(val);
                        }
                    });
                  
                }
                catch{
                        console.log("This is the errrrrrrrrrrrrrrrrrrrrrrrr")
                    res.sendStatus(500)
                }
              

            }
        })
    }
})

module.exports=route