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