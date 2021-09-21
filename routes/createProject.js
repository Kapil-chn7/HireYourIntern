const router=require('express').Router('strict')
const decrypt=require('../decrypt')
const database3=require('../database3')
const cookieMiddleware=require('../Middleware/cookieMiddleware')
const date = require('date-and-time');

router.post('/',cookieMiddleware,async (req,res)=>{

    const authentication_Id=await decrypt.decrypt(req.cookies['authentication_Id'],'D');
   

if(req.loggedIn){
    database3.findOne({'authentication_Id':authentication_Id},(err,user)=>{

        if(err){
            console.log("This is the server error")
      res.sendStatus(500);

        }
        else{
            
            if(user){

                console.log("req",req.body)
                const objdata={

                    titledata:req.body.titledata,
                    userNamedata:req.body.userNamedata,
                    emaildata:req.body.emaildata,
                    tagsdata:req.body.tagsdata,
                    textDescriptiondata:req.body.textDescriptiondata,
                    githubLinkData:req.body.githubLinkData
                 }
                 
                //  database3.findOne({'authentication_Id':authentication_Id},{userOwnProjects:[-1]},(err,userval)=>{
                //      if(err){
                //          console.log("This is the error",err)
                //      }
                //      else{
                //          console.log("user",userval)
                //      }
                //  })
               database3.findOneAndUpdate({'authentication_Id':authentication_Id},
            //    { $dateFromString: {
            //     dateString: "2017-02-08T12:10:40.787"
            // } },
              
                // {$addToSet:{
                //     'projectDetails':objdata
                // }},
                {
                    $push:{
                        userOwnProjects:{projectDetails:objdata}
                      }
                },(err,userval)=>{
                    if(err){
                        console.log("this is the error",err);
                        res.sendStatus(500);
                    }
                    else{
                        console.log("This is the userval",userval)
                        res.sendStatus(200);
                        
                    }
                })
    
    
    
            }
            else{
              
            const objdata={

            titledata:req.body.titledata,
            userNamedata:req.body.userNamedata,
            emaildata:req.body.emaildata,
            tagsdata:req.body.tagsdata,
            textDescriptiondata:req.body.textDescriptiondata,
            githubLinkData:req.body.githubLinkData,
         }
         console.log('obj data',objdata)

                const obj=new database3({
                    userOwnProjects:[{projectDetails:objdata}],
                    authentication_Id:authentication_Id
                })
                obj.save()
                .then(resp=>{
                    console.log("This is the rewp",resp);
                    res.sendStatus(200)
                })
                .catch(err=>{
                    console.log("This is the err",err);
                    res.sendStatus(500)
                })
            }
        }
    })
}



})

module.exports=router