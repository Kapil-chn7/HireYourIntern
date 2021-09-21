const mongoose=require('mongoose');

const projectHistorySchema=mongoose.Schema({

    projectDetails:{
        type:Object,
        required:true
    }



},{
    timestamps:true
})
const createProjectSchema=mongoose.Schema({

   userOwnProjects:[projectHistorySchema],
   authentication_Id:{
    type:String,
    required:true
}

},
{
    timestamps:true
})


const createProjectData=mongoose.model('createProjectSchema',createProjectSchema);


module.exports=createProjectData;