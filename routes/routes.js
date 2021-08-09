const router=require('express').Router();
const {OAuth2Client} = require('google-auth-library');
const database=require('../database')
const passport=require('passport');
const { response } = require('express');
const cookieMiddleware=require('../Middleware/cookieMiddleware');
const { decrypt } = require('../decrypt');

 


const oauth2Client = new OAuth2Client(
   '74755662919-9uthu46ev4a2hff3cti5t6cml19fqmcs.apps.googleusercontent.com',
   'JJTCE3QrhoJfpCR9Eb4CCc5O',
   'http://localhost:5000/auth/google/redirect'
 );

// router.get('/google',passport.authenticate('google',{scope:['profile']}));

// // router.get('/google',(req,res)=>{
// //     res.send('working')
// // })
// router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
//    console.log("this is redirect");
//    res.redirect('http://localhost:8080/auth/google/Profile/Chat');
// res.end();
 
   
// })

router.post('/google',async (req,res)=>{
   console.log("Inside of router /google ...................");
   console.log(
      "This sis after this thing"
   )
   // const tokens = await oauth2Client.getToken(req.body.code);
   // oauth2Client.setCredentials(tokens);
   // console.log("These are the tokens",tokens)
   return tokens;
   
})


router.get('/google/redirect',(req,res)=>{
   console.log("this is from the response");
   return 'hi';
})


router.post('/signin',(req,res)=>{
  
   console.log("Inside of router /signin ...................");
 console.log("req.userLoggedIn",req.loggedIn)
   var access_token=req.body.access_token;
   var authentication_Id=req.body.userId;
   
   if(req.loggedIn===false){

      console.log("Authentication_Id,,,,,,,,,,,,,,",authentication_Id)
     
      database.userauth.findOne({'authentication_Id':authentication_Id},async (err,user)=>{
         if(err){
            console.log("This is the error",err);
            
            // if(err==null){
            //   database.userauth.inserOne({'session_Id':session_Id,'authentication_Id':authentication_Id})
            // }
            // else{
            //    console.log("Something went wrong",err);
            // }
   
            console.log("THis is the cookie data",req.cookie)
         }
         else{
              if(!user){
              database.userauth.create({'session_Id':access_token,'authentication_Id':authentication_Id});
              res.cookie('authentication_Id',await decrypt(authentication_Id,'E'),{httpOnly:true});
              return res.status(200).send(false);
            }
            else{
               console.log("User Exist",user.authentication_Id);
               console.log("cookei",res.cookies);
               database.userauth.findOneAndUpdate({'authentication_Id':authentication_Id},{'session_Id':access_token},{useFindAndModify:true},(err,user)=>{
                  if(err){
                     console.log("this is the error")
                  }
                  else{
                     console.log("User",user)
                  }
               });
               res.cookie('authentication_Id',await decrypt(authentication_Id,'E'),{httpOnly:true});
               
               res.status(200).send(true)
            }
         }
      
        
      })
   }
   else{
      res.status(200).send(true);
   }
   

})
module.exports=router;