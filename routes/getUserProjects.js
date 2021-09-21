const express=require('express')
const database3=require('../database3')
const decrypt=require('../decrypt')
const route=express.Router()

route.post('/',async (req,res)=>{
console.log("This is the value of the ",req.cookies['authentication_Id']);

const authentication_Id=await decrypt.decrypt(req.cookies['authentication_Id'],'D')
console.log('authentication_Id',authentication_Id);
database3.findOne({authentication_Id:authentication_Id},(err,user)=>{

    if(err){
        console.log("This is the error",err);
        res.status(303).send("Your do not have any post")
    }
    else{
        console.log("user",user);
        res.status(200).send(user);
    }
})
    
})

module.exports=route