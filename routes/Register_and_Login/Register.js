const express=require('express');
const router=express.Router();
const confirmation_email=require('../../nodemailer')
const database=require('../../RegisterAndLoginDatabase/registerDatabase')


var otpGenerator = require('otp-generator')



router.post('/',async (req,res)=>{
    var errors=[];
    console.log("Comming here")

    const {userEmail,userPassword,userRePassword}=req.body;
    if(!userEmail){
        errors.push('Email Cannot Be Empty');
    }
    if(!userPassword){
        errors.push('Password Cannot Be Empty');
    }
    if(!userRePassword){
        errors.push('ReEnterd password Cannot Be Empty');
    }
    if(userRePassword != userPassword){
        errors.push('Re Enter Password does not match ');
    }
    if(errors.length>0){
        console.log("errors",errors)
        res.status(403).send(errors)
    }
    else{
        database.findOne({userEmail:userEmail},async (error, user)=>{


            if(error){
                errors.push("Something went wrong");
                console.log("tHi",error)
                res.status(500).send(errors);
            }
            else{
                if(!user){
                   const OTPValue=await otpGenerator.generate(10, { upperCase: false, specialChars: false });
                   const OTP={
                       useremail:userEmail,
                       OTP:OTPValue
                   }
                  await confirmation_email(OTP)
                  .then(resp=>{
                      console.log("resp",resp);
                      req.session.userData=OTP;
                      res.status(200).send('Sent')
                  })
                  .catch(err=>{
                      console.log("This is the error",err);
                      errors.push("Something went wrong");
                      res.status(500).send(errors);
                  })


                

                }
                else{
                    errors.push("User Exists with this email");
                    console.log("errors2",errors,user)
                    res.status(409).send(errors)
                }
            }
        })
    }

})

module.exports=router