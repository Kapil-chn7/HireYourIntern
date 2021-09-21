<template>
<div class="divclass1">
<div v-if="showspinner" class="h-100 container d-flex justify-content-center align-items-center">

 
          <div class="spinner-border" role="status" style="width:100px;height:100px">
            <span class="sr-only" >Loading</span>
        </div>
  

</div>
    
      <div v-else class="container">
         <form class="row needs-validation" @submit.prevent @submit="submitfun" >
          <div class="form-row">
            
            <div class="col-lg-4 col-md-5 offset-md-0 offset-lg-1 ">
                <div class="form-group ">
                <label for="titleDescription">Enter Title of Project</label>
                <input type="text" class="form-control" id="titleDescription" aria-describedby="emailHelp" placeholder="Enter Title" maxlength="20" v-model="obj.titledata" required @invalid="invalidFun" @input="checkAllFields=true">
                <small id="emailHelp" class="form-text text-muted">Title should be concise and short</small>
                    <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
              </div>
            </div>
            
             <div class="col-lg-4 col-md-5 offset-md-1 offset-lg-2 offset-md-1 ">
                    <div class="form-group">
                    <label for="projectLeader">Project Leader Name</label>
                    <input type="text" class="form-control" id="projectLeader" style="width:350px" aria-describedby="emailHelp" placeholder="Enter Name" maxlength="20" v-model="obj.userNamedata" required @invalid="invalidFun" @input="checkAllFields=true">
                    <small id="emailHelp" class="form-text text-muted">Please Enter the Full Name</small>
                  </div>
             </div>
            <div class="col-lg-4 col-md-5 offset-md-0 offset-lg-1 ">
                    <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" maxlength="20" v-model="obj.emaildata" required @invalid="checkEmail=false" @input="checkEmail=true" >
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
            </div>

             <div class="col-lg-4 col-md-5 offset-md-1 offset-lg-2 offset-md-1 ">
                      <div class="form-group">
                      <label for="enterTags">Tags</label>
                      <input type="text" class="form-control" id="enterTags" aria-describedby="emailHelp" placeholder="Please enter tags seperated by #" maxlength="30" v-model="obj.tagsdata" required @invalid="invalidFun" @input="checkAllFields=true">
                      <small id="emailHelp" class="form-text text-muted">Example Node.js# Vue.js</small>
                    </div>
             </div>
            <div class="col-lg-4 col-md-5 offset-md-0 offset-lg-1 ">
                      <div class="form-group">
                        <label for="sel1">Select list:</label>
                        <select class="form-control" id="sel1">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          
                        </select>
                      </div>
            </div>
             <div class="col-lg-4 col-md-5 offset-md-1 offset-lg-2 offset-md-1 ">
                        <div class="form-group">
                        <label for="exampleInputPassword1" >Github Link</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Option if you want to share github repository " maxlength="30" v-model="obj.githubLinkData">
                      </div>
             </div>


                           <div class="col-lg-4 col-md-5 offset-md-4 offset-lg-4 mt-4 ">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1" required @click="clickCheck" >
                      <label class="form-check-label" for="exampleCheck1">Now I'm responsible for the project</label>
                    </div>
                   </div>




                    <div class="col-lg-7 col-md-9 offset-md-1 offset-lg-2 mt-4 ">

                  <div class="form-group">
                      <label for="exampleFormControlTextarea1">Example textarea</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="obj.textDescriptiondata" required  @input="checkAllFields=true"></textarea>
                  </div>
            </div>

                              
                           <div class="col-lg-4 col-md-4 offset-md-4 offset-lg-4  ">

                            <div class="form-group row justify-content-center">
                             
                               <button type="submit" class="btn btn-primary" id="submitbtn">Create Project</button>
                            </div>
            </div>
          </div>
         </form>
      </div>

    </div>
</template>


<script>
import axios from 'axios'
export default {
    
data(){

    return {
        showspinner:false,
        obj:{
        titledata:null,
        userNamedata:null,
        emaildata:null,
        tagsdata:null,
        textDescriptiondata:null,
        githubLinkData:null,
        totalmemData:1

        },
        checkAllFields:true,
        checkEmail:false


    }
},
methods:{
  clickCheck(){
   const checkedValue= document.getElementById("exampleCheck1").checked;
   


      if(checkedValue==true){
      this.checkAllFields=true;
    }
    else{
      this.checkAllFields=false;
    }

   
   
   
  },

   submitfun(){
 
const checkedValue= document.getElementById("exampleCheck1").checked;
const totalNoOfuser=document.getElementById("sel1").value;
console.log("This is the value",totalNoOfuser)
     
     for (const key in this.obj) {
       if (this.obj[key]==null ) {
         console.log("key",key,"  " ,this.obj[key])
         if(key=="githubLinkData"){
           break;
         }
         else{
           return true;
         }
         
       }
     }
     console.log(this.checkAllFields,this.checkEmail,checkedValue)

    if(this.checkAllFields==true && checkedValue && this.checkEmail==true){

          const submitbtn=document.getElementById('submitbtn')
     submitbtn.style.display="none";
     this.showspinner=true;
     console.log("Inside")
       axios.post('/api/createProject',this.obj)
       .then((res)=>{
           console.log("This is the response",res);
           this.showspinner=false;
       })
       .catch(err=>{console.log("This is the error",err);
       this.showspinner=false;
       })
    }
    else{
      return true;
    }
     
     
     },
     invalidFun(e){
     
      this.checkAllFields=false;
      if(e.target.type=='email'){
        this.checkEmail=false;
        console.log(e,"vvvvvvv")
        
      }
      else{
        this.checkAllFields=false
      }
    
     
     }

   


}

}
</script>

<style scoped>

.divclass1{
    background-color: white;
    width:100%;
    height: 90vh;
    position: relative;
    overflow: scroll;
    top: 70px;
    
}
/* form{
    height:500px ;
    width: 500px;
} */
</style>