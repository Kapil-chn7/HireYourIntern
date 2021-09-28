const express=require('express');
const route=express.Router();
const Middleware=require('../../Middleware/cookieMiddleware')
route.post('/',Middleware,(req,res)=>{

    console.log("Inside of router /checkcookies ...................");

    if(req.loggedIn==false){
      console.log("User is invalid");
      
      res.status(403).send({exist:false});
    }
    else if(req.loggedIn==true){
        console.log("this is the user",req.userId);
        console.log("sadfffff",req.userGeneratedToken)
        if (req.userGeneratedToken!='' && req.userGeneratedToken!=undefined) {
          console.log("THis is me")
          res.cookie['cookieName']=req.userGeneratedToken ;
        } 
        else{
          console.log("This is the else");
        }
        res.status(200).send({exist:true, userId:req.userId})
    }
    else{
      console.log('server error');
      res.status(500).send({exist:false});
     
    }

})

module.exports=route;