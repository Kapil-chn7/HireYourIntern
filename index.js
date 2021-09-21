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
//storing session in database during otp time
const MongoStore=require('connect-mongo')(session);
app.use(cors({credentials:true,
origin:true,
methods:['PUT, POST, PATCH, DELETE, GET'],
allowedHeaders:'Content-Type,Authorization'}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.use(cookieParser('hola',{
  name:'user_sid',
  maxAge: 24 * 60 * 60 * 1000
}));





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



console.log("mongostore",MongoStore)
// }))
app.use(session({
  key:'user_sid',
  resave:false,
  saveUninitialized:false,
  secret:"this is me",
  name:'cookie1',
  store:new MongoStore({mongooseConnection:mongoose.connection,
    collection:'collectionOTP',
    autoRemove:'native',
    
  ttl:60*100})

}))


const cookieMiddleware=require('./Middleware/cookieMiddleware');
app.use('/auth',cookieMiddleware,googleauthentication);
app.post('/validateUser',cookieMiddleware,(req,res)=>{
  console.log("This is the request.body")
  
 res.status(200).send(req.loggedIn);
});




app.post('/checkCookies',cookieMiddleware,(req,res)=>{
  
  console.log("Inside of router /checkcookies ...................");

  if(req.loggedIn==false){
    console.log("User is invalid");
    
    res.status(403).send({exist:false});
  }
  else if(req.loggedIn==true){
      console.log("this is the user",req.userId);
      res.status(200).send({exist:true, userId:req.userId})
  }
  else{
    console.log('server error');
    res.status(500).send({exist:false});
   
  }

})



const postdata=require('./database2');
const decrypt=require('./decrypt');
const imgwithdata = require('./postdataNfile');
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
  postdata.findOne({authentication_Id:decryptPassword},async function(err,user){

    if(err){
      console.log("This is the error from the userPost",err)
    }
    else{
    
      if(user){
        

        if(req.file==undefined){
          console.log("This is the 1")
          var post={
            userPost:req.body
          }
          
       

         await  postdata.findOneAndUpdate({authentication_Id:decryptPassword}
          ,{$addToSet:{

            userPostData:post
          }},{


            $push:{
              userPostData:post
            }
          },(err,userval)=>{
            if(err){
              console.log("This is the error",err);
              res.send(409)
            }
            else{
              console.log("This is the user",userval)
              res.send(200)
            }
          })

        
         
        }
        else {
          console.log("This is the 2")
    
          const post={
            userPost:req.body,
            userPostImage:req.file.buffer
          }
         

          await  postdata.findOneAndUpdate({authentication_Id:decryptPassword},{$addToSet:{

            userPostData:post
          }},{

          
            $push:{
              userPostData:post
            }
            
          },(err,userval)=>{
            if(err){
              console.log("This is the error",err);
              res.send(409)
            }
            else{
              console.log("This is the user");
              res.send(409)
            }
          })
        }


      }
      else {
        
        
       if(fileAvailable=='T' ){
        console.log("This is the 3")

          const postdataval={
                userPost:req.body,
               userPostImage:req.file.buffer
          }
          console.log("This is the value of the postdata Array",req.file.buffer)
         const post=new postdata({
              userPostData:[postdataval],
            authentication_Id:decryptPassword
         })
          post.save()
          .then(async(resp)=>{
            console.log("This is the response");
            res.send(200)
          })
          .catch((err)=>{
            console.log("This is the error",err)
            res.send(409)
          })
         
        }
         else if(fileAvailable=='F'){
          console.log("This is the 4")
          const dataval={
            userPost:req.body
          }
         const post=new postdata({
              userPostData:[dataval],
            authentication_Id:decryptPassword
         })
       
          post.save()
          .then(async(resp)=>{
            console.log("File is not available");
            res.send(200)
          })
          .catch((err)=>{
            console.log("This is the error",err);
            res.send(409)
          })
         
       }
        
    
      
      }
    
    
    
    }
    
    })
}
else{

  console.log("The cookie is wrong")

  res.sendStatus(401)
}










  
})

const createProject=require('./routes/createProject')
app.use('/createProject',createProject);



//getting userPost

const getUserPost=require('./routes/getUserProjects')
app.use('/getUserPost',getUserPost);



//updateProfile

const updateProfileRoute=require('./routes/editUserProfile')
app.use('/editUserProfile',cookieMiddleware,updateProfileRoute)



//register or login


//register

const userRegistration=require('./routes/Register_and_Login/Register');
app.use('/userRegistration',userRegistration)

//checkOTP route

const checkOTP=require('./routes/Register_and_Login/checkOTPvalue')
app.use('/checkOTP',checkOTP)


//refresh token

const refreshToken=require('./routes/Register_and_Login/refreshToken')
app.use('/refresh',refreshToken)


//signin

const signin=require('./routes/Register_and_Login/signin.js')
app.use('/signin',signin)


//fetching userdata

const userdata=require('./routes/Fetchdata/userProfiledata.js');
app.use('/userdata',userdata)