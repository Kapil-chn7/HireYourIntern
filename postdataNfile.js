const mongoose=require('mongoose')
const postImagewithdataschema=mongoose.Schema({


    // img_data_comment:{
    //     type:Object,
    //     require:true
    // },
    userPost:{
        type:Object,
        required:false
    },
    userPostImage:{
        type:Object,
        required:false
    },



})



const imgwithdata=mongoose.model('imagewithdata',postImagewithdataschema);
module.exports=imgwithdata;