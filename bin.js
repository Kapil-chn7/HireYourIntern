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
const otpGenerator=require('otp-generator')
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})



const session=require('express-session')
app.use((req,res,next)=>{

  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Acess-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept, Authorization")

  res.setHeader('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET, OPTIONS');
  
  next();
});

app.use(cors())
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
app.post('/checkCookies',(req,res)=>{
  console.log("This is the response");
  console.log(req.cookies,'cook')
 const cookievalue=req.cookies
  console.log("This is the value of the cookie ", cookievalue);
  if(cookievalue){
    res.status(404).send({exist:false});
  }
  else{
    res.status(200).send({
      exist:true,
      cookievalue: false
    }
    )
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




// class Solution {
//   vector<long long int> vec;
// public:
//   double findMedianSortedArrays(vector<int>& num1, vector<int>& num2) {
      
      
//        num1.insert(
//     num1.end(),
//     std::make_move_iterator(num2.begin()),
//     std::make_move_iterator(num2.end())
//   );
//       vector<int>::iterator ptr;
//       vector<int>::iterator ptr2;
//       int sum;
//       int value=0;
//       if(num1.size()%2==0){
//           for (ptr = num1.begin(),ptr2=num1.begin(); ((ptr < num1.end() )&& (ptr2 <=num1.size()/2)); ptr++,ptr2+2)
              
//       sum=(*ptr2+*(ptr2+1))/2;
          
//           return sum;
    
//   }
      
//       else{
          
//           value=num1.size()+1;
//                for (ptr = num1.begin(); ptr == value/2; ptr++)
              
//           sum=*ptr;
          
//           return sum;
          
//       }
//       }
// };