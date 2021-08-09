const express=require('express')
const app=express();
const PORT=5000;
const cors=require('cors')
const bodyParser=require('body-parser')
const cookieSession=require('cookie-session');
const passport=require('passport');
const passportsetup=require('./passport')
const mongoose=require('mongoose')
const path=require('path')
const request=require('request')
const axios=require('axios')
const googleauthentication=require('./routes/routes');
const cookieParser=require('cookie-parser')
const bcrypt=require('bcrypt')
const otpGenerator=require('otp-generator');
const multer=require('multer');
const upload=multer({storage:multer.memoryStorage()})
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})

const database=require('./database')

const session=require('express-session')
// app.use((req,res,next)=>{

//   res.setHeader("Access-Control-Allow-Origin","*");
//   res.setHeader("Acess-Control-Allow-Headers",
//   "Origin, X-Requested-With, Content-Type, Accept, Authorization")

//   res.setHeader('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET, OPTIONS');
  
//   next();
// });

app.use(cors({credentials:true,
origin:true,
methods:['PUT, POST, PATCH, DELETE, GET'],
allowedHeaders:'Content-Type,Authorization'}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))




//   app.use(cookieSession({
//     name:'session',
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: 'tattiKarkenaacho'
// }));

app.use(cookieParser({
  name:'cookie',
  maxAge: 24 * 60 * 60 * 1000
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {httpOnly:true, path:'/refresh',secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());



mongoose.connect('mongodb+srv://Kapil:Kapil@123@cluster0.cl5ei.mongodb.net/DummyDatabase?retryWrites=true&w=majority',
{
useUnifiedTopology:true,
useNewUrlParser: true
}).then((res)=>{
    console.log("this is connected ")
})
.catch(err=>{
    console.log("Datebase is not connected")
})




// app.get('/login',passport.authenticate('local', { failureRedirect: '/login' }),
// (req, res)=> {
//   res.sendStatus(200);
// });

const jwt=require('jsonwebtoken')
// app.get('/login',(req,res)=>{
//   console.log("inside of the login post method");
//   const userdata={
//     username:'Kapil Chauhan',
//     userpassword:'Kapil@123'
//   }
//   const token=jwt.sign({
//     username:'Kapil Chauhan',
//     userpassword:'Kapil@123'
//   },'kapilchauhan@123');

//   res.cookie('OTP','fg');
//   console.log("this is the Token",req.cookies);
//   res.send('kapil Chauhan')
// })

//google authentication

// app.get('/auths',async(req,res)=>{
//     console.log('inside of the user authentication');
//     await axios.get('http://localhost:5000/auth/google')
//      .then((resp)=>{
         
//         console.log("this is axios");
//         res.end()
//      })
//      .catch(err=>{
//          console.log("this is the err",err);
//      })
   
// })

const cookieMiddleware=require('./Middleware/cookieMiddleware')
app.use('/auth',cookieMiddleware,googleauthentication);
app.post('/validateUser',cookieMiddleware,(req,res)=>{
  console.log("This is the request.body")
  
 res.status(200).send(req.loggedIn);
});




app.post('/checkCookies',cookieMiddleware,(req,res)=>{
  
  console.log("Inside of router /checkcookies ...................");
 
 const cookievalue=req.cookies
  console.log("This is the value of the cookie ", cookievalue);
  if(!cookievalue['authentication_Id'] && req.loggedIn==false){
    console.log("Returning from here")
    res.status(200).send({exist:false});
  }
  else{
    console.log("THis is req.loggedIN,,,,,,,,,,,,,,,,,,,,",req.loggedIn)
    if(req.loggedIn==true){

      res.status(200).send({
        exist:true,
        cookievalue: req.cookies.authentication_Id
      }
      )
    }
    else{
      console.log("returning from here")
      res.status(200).send({exist:false});
    }
  }
})

// app.get('/auth/google',(req,res)=>{
//     console.log("this is the res");
//  res.sendStatus(200)
// })
// app.get('/Chat',(req,res)=>{
// var newurl='http://localhost:5000/auth/google';
// request(newurl).pipe(res);

// })
app.get('/username',(req,res)=>{
  yourPassword='KapilChn@123'
  console.log("this is the cookie data",req.cookies.OTP);
  bcrypt.hash(yourPassword, 2, (err, hash) => {
    console.log("This is the hashed password",hash);

    // Now we can store the password hash in db.
  });
  
  res.send('hello')

  console.log('this is form userOPT')
})

//OTP generator

function OTPgenerator(){
return new Promise(async(resolve,reject)=>{


  var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
  
  let OTPvalue='';
 
 // Find the length of string 
 var len = string.length; 
 for (let i = 0; i < 8; i++ ) { 
     OTPvalue += string[Math.floor(Math.random() * len)]; 
 } 
console.log(OTPvalue,"OTP value");
await bcrypt.hash('sfdasdsffafds',10)
.then(resp=>{
  console.log("this is resp",resp);
  resolve(resp);
})
.catch(err=>{
  console.log("this is the error",err);
  reject(err);
})

})



}

const confirmation_email=require('./nodemailer');
const { cookie } = require('request');
const { json } = require('body-parser');
const { fstat } = require('fs');

async function middleware1(req,res,next){

  console.log("OTP details",req.body);

  const otpGenerated=otpGenerator.generate(8, { upperCase: false, specialChars: false });
console.log("Otp generated",otpGenerated)
  //this is the await
  
 

}



app.post('/signup',cookieMiddleware,(req,res)=>{
  console.log("this is from the signup area");
  res.send('hi')
})

const fs =require('fs')
app.post('/updateProfile',upload.single('userImage'),async(req,res)=>{
  
  
var authentication_Id='114119276291106471990';
console.log("req",req.file);
var userdata;
if(req.file==undefined){
 userdata={
    userDetails:req.body,
    userImage:null
  }
}
else{
 userdata={
    userDetails:req.body,
    userImage:req.file.buffer
  }
}
// fs.writeFile(`./Images/${req.file.originalname}`,req.file.buffer,'base64',()=>{
//   console.log("This is the file in the fs")
// })
var user=new database.editProfile(userdata);
console.log("This is userdata",userdata)
//   database.editProfile.findOne({'authentication_Id':authentication_Id},(err,user)=>{
//     if(err){
//        console.log("This is the error",err);
       
//        // if(err==null){
//        //   database.userauth.inserOne({'session_Id':session_Id,'authentication_Id':authentication_Id})
//        // }
//        // else{
//        //    console.log("Something went wrong",err);
//        // }

       
//     }
//     else{
//          if(!user){
//          database.editProfile.create({'userData':userdata});
//          console.log("this is hwer");
     
         
//          return res.status(200).send('user has been updated');
//        }
//        else{
//           console.log("User Exist",user);
       
//           database.editProfile.findOneAndUpdate({'authentication_Id':authentication_Id},{useFindAndModify:true},(err,user)=>{
//              if(err){
//                 console.log("this is the error");
//                 res.status(500).send("something went wrong")
//              }
//              else{
//                 console.log("User",user)
//              }
//           });
      
          
//           res.status(200).send('UpdatedUser')
//        }
//     }
 
   
//  })


 await database.editProfile.updateOne({'authentication_Id':authentication_Id},{$set:{
  'userdata':userdata
 }},(err,user)=>{
  if(err){
     console.log("this is the error");
     res.status(500).send("something went wrong")
  }
  else{
     console.log("User",user);
     res.status(200).send('UpdatedUser')
  }
});

})


app.post('/updateProfiles',upload.single('userImage'),(req,res)=>{
  console.log("This is teh rre",req.body,req.file);


})
app.get('/userdata',(req,res)=>{
  console.log("this is me")
  console.log('req.params',req.query.payload);
  var authentication_Id='114119276291106471990';
  database.editProfile.findOne({'authentication_Id':authentication_Id},(err,user)=>{
    if(err){
       console.log("This is the error",err);
       
       // if(err==null){
       //   database.userauth.inserOne({'session_Id':session_Id,'authentication_Id':authentication_Id})
       // }
       // else{
       //    console.log("Something went wrong",err);
       // }

       
    }
    else{
         if(!user){
         
         console.log("User does'nt exist")
         
         return res.status(304).send('user does\'nt exist');
       }
       else{
          console.log("User Exist",user);

          return res.status(200).send(user)

          }
      
          
          
       }
    
 
   
 })
})
var rand = require("random-key");
const postdata=require('./database2');
const encrypt=require('./uniqueId');
const decrypt=require('./decrypt')
app.post('/userpost',upload.single('file'),async (req,res)=>{

var fileAvailable='F';
if(req.file==undefined){
  fileAvailable='F';
}
else{
  fileAvailable='T';
}


var authenticationCookie=req.cookies['authentication_Id'];

const decryptPassword=await decrypt.decrypt(authenticationCookie , 'D');



if(decryptPassword!=false){
  postdata.findOne({authentication_Id:decryptPassword},function(err,user){

    if(err){
      console.log("This is the error from the userPost",err)
    }
    else{
    
      if(user){
        console.log("This is the user",user);

        if(req.file==undefined){

          const post =new postdata({
            userPost:req.body,
            authentication_Id:decryptPassword
          });
          
          // post.save()
          // .then((resp)=>{
          //   console.log("This is the post data",resp)
          // })
          // .catch((err)=>{
          //   console.log("This is the error",err)
          // })

          user.$push(post);
        }
        else {

          var post =new postdata({
            userPost:req.body,
            authentication_Id:decryptPassword,
            userPostImage:req.file.buffer
          });
          
          post.save()
          .then((resp)=>{
            console.log("This is the post data",resp)
          })
          .catch((err)=>{
            console.log("This is the error",err)
          })
        }


      }
      else {
        console.log("UserNot find",user);
        
       if(fileAvailable=='T'){
        
          var post =new postdata({
            userPost:req.body,
            authentication_Id:decryptPassword,
            userPostImage:req.file.buffer
          });
          post.save()
          .then((resp)=>{
            console.log("This is the post data",resp)
          })
          .catch((err)=>{
            console.log("This is the error",err)
          })
         
        }
         else if(fileAvailable=='F'){
          const post =new postdata({
            userPost:req.body,
            authentication_Id:decryptPassword
          });
          post.save()
          .then((resp)=>{
            console.log("This is the post data",resp)
          })
          .catch((err)=>{
            console.log("This is the error",err)
          })
         
       }
        
    
      
      }
    
    
    
    }
    
    })
}
else{

  console.log("The cookie is wrong")

  res.sendStatus(404)
}










  
})

