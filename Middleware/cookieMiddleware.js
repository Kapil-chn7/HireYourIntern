//this will check jwt token

const axios =require('axios')
const jwt=require('jsonwebtoken');





 async function checkJwtToken(req,res,next){

    console.log("Inside of cookie Middleware")
     

    if(!req.cookies['cookieName'] || !req.cookies['refreshToken']){

     
        req.loggedIn=false;
        next();

    }
    else if(req.cookies['cookieName'] && req.cookies['refreshToken']){
     
        jwt.verify(req.cookies['cookieName'],'skdjanldfnmlasmfalkfsalkfas',async(err, value)=>{
            if(err){
                
     
                
                try{
                    console.log("Inside of try",jwt.decode(req.cookies['refreshToken'],{complete:true}).payload.refreshToken)
                    
                 await axios.post(`${urlvalue}/refresh`,{usertoken:req.cookies['refreshToken']})
                .then((response)=>{
                 console.log("responsessssssssssssssssssssssssssssssssss")
                    req.loggedIn=true;
                    req.userId=jwt.decode(req.cookies['refreshToken'],{complete:true}).payload.refreshToken;
                    req.userGeneratedToken=response.data;
                  
                  
                    // res.cookie('cookieName', val, {httpOnly: true });
                    next();
                })
                .catch(error=>{
                  console.log("This is the erro",error)
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
                console.log("ITs GOOD",value);
              
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