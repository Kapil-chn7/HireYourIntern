const express=require('express');
const route=express.Router();
const multer=require('multer');
const database=require('../database')
const dot = require('mongo-dot-notation')
var upload=multer({storage:multer.memoryStorage()})

//This is the route for editing the user profile
route.post('/',upload.fields([{ name: 'userProfileImage', maxCount: 1 }, { name: 'userResume', maxCount: 8 }]),async(req,res)=>{

    
        if(req.loggedIn){

            const instructionsss = dot.flatten({
                firstName: 'John',
                contact: { phone: '874-478-1254' },
                lastUpdate: dot.$currentDate()
              })
              console.log("Instruction",instructionsss)

            var authentication_Id='114119276291106471990';
            console.log("req",req.files);
            console.log("This is the state",req.body);
            //seperating empty and undefined data
           const entries = Object.entries(req.body);
           const userdata=entries.filter(fun );

           function fun(obj){
               return obj[1]!='' && obj[1]!=undefined
           }
           const obj = Object.fromEntries(userdata);

         console.log("userdata",obj)
         var instructions = dot.flatten(obj)
                console.log(instructions);


                //seperating empty and undefined files

                const entries2 = Object.entries(req.files);
                const userdata2=entries2.filter(fun );
     
                function fun(obj){
                    return obj[1]!='' && obj[1]!=undefined
                }
                const obj2 = Object.fromEntries(userdata2);
     
              console.log("userdata2",obj2)
              var instructions2 = dot.flatten(obj2)
                     console.log(instructions2);

            const instruction_One=dot.flatten(obj);
            const instruction_Two=dot.flatten(obj2)
      
             await database.editProfile.updateOne({'authentication_Id':authentication_Id},{$set:{
              instruction_One,instruction_Two}
             },(err,user)=>{
              if(err){
                 console.log("this is the error");
                 res.status(500).send("something went wrong")
              }
              else{
                 console.log("User",user);
                 res.status(200).send('UpdatedUser')
              }
            });


        }

        else{
            console.log("UserDoes'nt exist");
            res.status(403);
        }
  
 
        
        




})

module.exports=route