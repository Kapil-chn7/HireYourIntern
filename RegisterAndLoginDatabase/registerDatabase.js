const mongoose=require('mongoose');
const userRegisterSchema=mongoose.Schema({

   

    userEmail:
    {
        type:String,
        required:true
    },
    userPassword:{
        type:String,
        required:true
    }
    



},{
    versionKey:false,
    collection:'registerUserData'
})
const registerSchema=mongoose.model('registerSchema',userRegisterSchema)
module.exports=registerSchema;