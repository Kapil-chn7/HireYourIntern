const mongoose=require('mongoose')
const Schema=mongoose.Schema({
    _id:String,
    sessionVariable:Object
},
{
    collection:'collectionOTP',
   
})
const checkOTP=mongoose.model('checkOTPSchema',Schema)
module.exports=checkOTP