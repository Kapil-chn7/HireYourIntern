const mongoose=require('mongoose');
const signupdata=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    userpassword:String,
    userage:Date,
    useremail:String
},
{
    versionKey:false,
    collection:'userinfo'
})

const signin=mongoose.Schema({
   
    _id:mongoose.Schema.Types.ObjectId,
   googleId:String,
   username:String
},
{
     collection:'signininfo'
})


const session_Authentication=mongoose.Schema({
    session_Id:String,
    authentication_Id:String
}
,
{
    collection:'userSession'
})

const editProfile=mongoose.Schema({
    // authentication_Id:String,
    // userName:String,
    //                 userDescription:String,
    //                 userGraduationStatus:String,
    //                 userImage:String,
    //                 userHiringStatus:String,
    //                 userWebsite:String,
                    
    //                     userLinkdin:String,
    //                     userFacebook:String,
    //                     userInstagram:String,
    //                     userInternshala:String,
    //                     userGitHub:String
                    
    userName: String,
    userEmail: String,
    userTags: String,
    userState: String,
    userGender: String,
    userCollege: String,
    userAge: String,
    userLinkdin: String,
    userGithub: String,
    userBranch: String,
    userCollegeJoiningDate: String,
    userCollegeEndingDate: String,
    userDescription: String,
    userProfileImage:Object,
    userResume:Object,
    authentication_Id:{
        type:String,
        require:true
    }
                
},
{
    versionKey:false,
    collection:'userProfiles'
})
const userdata=mongoose.model('userdata',signupdata);
const signindata=mongoose.model('signindata',signin);
const userauth=mongoose.model('userauths',session_Authentication);
const editProfiles=mongoose.model('userProfiles',editProfile);
module.exports={
    userdata:userdata,
    signindata:signindata,
    userauth:userauth,
    editProfile:editProfiles
}