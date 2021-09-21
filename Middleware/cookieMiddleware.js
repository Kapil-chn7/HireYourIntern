// const database=require('../database');
// const decrypt=require('../decrypt')
// module.exports =async function cookieMiddleware(req,res,next){

// if(req.cookies['authentication_Id']!=null || req.cookies['authentication_Id']!=undefined){
//         try{
//             const authentication_Id= req.cookies['authentication_Id'];
//         const decryptedId=await  decrypt.decrypt(authentication_Id,'D')
//         console.log("This is decryptedId........",decryptedId)
//      console.log("aaaaaaaaaaaaaaaaaaaaaaaccccc.........",decryptedId)
//        database.userauth.findOne({authentication_Id: decryptedId},(err,user)=>{


//         if(err){
//             console.log("This is the error ",err);
//             next();
//         }
//         else{
           
//             if(!user){
//                 console.log("User doesnot exists",user);
//                 req.loggedIn=false;
//                 next();
//             }
//             else{
//                 console.log("User exist ",user);
//                 req.loggedIn=true;
//                 next();
//             }
//         }
//        })
//         }
//         catch(err){
//             console.log("This is the error",err);
//             req.loggedIn=false;
//             next();
//         }
// }

// else{



//     console.log("User Cookie is not available");
//     req.loggedIn=false;
//     next();
// }






// }


//this will check jwt token

const axios =require('axios')
const jwt=require('jsonwebtoken');

 async function checkJwtToken(req,res,next){

    if(!req.cookies['cookieName'] || !req.cookies['refreshToken']){

     
        req.loggedIn=false;
        next();

    }
    else if(req.cookies['cookieName'] && req.cookies['refreshToken']){
     
        jwt.verify(req.cookies['cookieName'],'skdjanldfnmlasmfalkfsalkfas',async(err, value)=>{
            if(err){
                
     

                try{
                    
                 await axios.post('http://localhost:5000/refresh',{usertoken:req.cookies['refreshToken']})
                .then((response)=>{
                 
                    req.loggedIn=true;
                    req.userId=jwt.decode(req.cookies['refreshToken'],{complete:true}).payload.refreshToken;
                  
                    // res.cookie('cookieName', val, {httpOnly: true });
                    next();
                })
                .catch(error=>{
                  
                    res.sendStatus(500);
                })
                   
                }


                catch(err)
                {
                 
                    req.loggedIn=false;
                   
                    next();
                }
            }
            else{
                console.log("value",value);
              
                req.loggedIn=true;
                req.userId=jwt.decode(req.cookies['refreshToken'],{complete:true}).payload.refreshToken;
                next();
            }
        } )
    }
  
    else{
        
        res.sendStatus(403);
    }
} 


module.exports=checkJwtToken