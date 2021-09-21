const mongoose=require('mongoose');
const postSchema=mongoose.Schema({

// userPost:{
//     type:Object,
//     required:false
// },
// userPostImage:{
//     type:Object,
//     required:false
// },
userPostData:[Object]
,
authentication_Id:{
    type:String,
    required:true
}



},{
    timestamps:true
})

const postdata=mongoose.model('userPost',postSchema);


module.exports=postdata;