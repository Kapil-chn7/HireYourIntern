const mongoose=require('mongoose');
const Schema=mongoose.Schema(
    {



        
        _id: {
            type:String,
            required:true
        }
        ,
        userProfileData:{
            type:Object,
            required:false
        }



    },
    {
        collection:'userProfiles',
        versionKey:false
    }
)

const userProfileSchema=mongoose.model('userProfile',Schema);
module.exports=userProfileSchema