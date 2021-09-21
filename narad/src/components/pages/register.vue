<template>
    <div class="container bg-dark ">
        <div class="container bg-light" v-if="errors.length > 0">
    
        <div class="alert alert-warning alert-dismissible fade show" v-for="error in errors" :key="error" role="alert">
            <strong v-if="error == 'User Exists with this email'">{{error}}
                <router-link to="/signup">SignUp</router-link></strong> 
            <strong v-else>{{error}}</strong> 
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="popUpMessage(error)">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
        </div>
        <div class="row">
            <div class=" container col col-lg-6" v-if="showForm">
                <div class="row  ">
                    <div class="col d-flex justify-content-center">
                        <strong>
                            <router-link to="/signup">SignIn</router-link>
                        </strong>
                        
                    </div>
                    
                </div>
                <form @submit="fun1">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="userEmail" required>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="userPassword" required maxlength="10" minlength="8">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="text" class="form-control" id="exampleInputPassword2" placeholder="ReEnter your Password"  v-model="userRePassword" required  maxlength="10" minlength="8">
                </div>
                
                <button type="submit" class="btn btn-primary">Register</button>
                </form>
        </div>
        </div>
   

        <div class="row" v-if="showSpinner" >
                
                     <LoopingRhombusesSpinner/>
             
               


        </div>
        <div class="row" v-if="showOTP">
            <form @submit="checkOTPvalue" @submit.prevent >
                    <div class="row" v-if="showOTP">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Enter OTP</label>
                    <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter 10 digits OTP" required maxlength="10" minlength="10" v-model="userOTP">
                    <small id="emailHelp" class="form-text text-muted">It will expire within one hour.</small>
                </div>
                <input class="form-control form-control-lg" type="text" :value="`${timeValue}s`" id="timer" placeholder=".form-control-lg" disabled>
                <button type="submit" class="btn btn-primary"  >Confirm</button>
        </div>
        </form>
        </div>
    </div>
</template>


<script>
import { LoopingRhombusesSpinner } from 'epic-spinners';
import axios from 'axios'
export default {
      components: { 
  LoopingRhombusesSpinner },
    data(){


        return {
            userEmail:null,
            userPassword:null,
            userRePassword:null,
            userOTP:null,

            //this is for the display
            showForm:true,
            showOTP:false,
            showSpinner:false,

            //timer
            timeValue:900,

            //errors
            errors:[]
         
        }
    }
    ,
    watch:{

            timeValue: {
                handler(value) {

                    if (value > 0) {
                        setTimeout(() => {
                            this.timeValue--;
                        }, 1000);
                    }

                },
                immediate: true // This ensures the watcher is triggered upon creation
            }
    },

    methods:{
       async fun1(){

           //reset errors array to empty
           this.errors=[];
           this.showForm=false;
           this.showSpinner=true;
           var userdata={
               userEmail:this.userEmail,
               userPassword:this.userPassword,
               userRePassword:this.userRePassword
           }
        
        

        console.log(userdata,"userdata")
            
           await axios.post('/api/userRegistration',userdata)
            .then(resp=>{
                
                this.showSpinner=false;
                this.showOTP=true;


                console.log("inside of teh resp console",resp)
               

            })
            .catch(err=>{
                this.showForm=true;
                 this.showSpinner=false;
                console.log("this is the err",err.response.data);
                this.errors=err.response.data;
            })
        },

        async fun2(){

            this.timeValue=0;
            this.showOTP=false;
            this.showSpinner=true;
            await axios.post('/api/checkOTP', this.userOTP)
            .then(resp=>{
                this.showSpinner=false;
                console.log(resp)
            })
            .catch(err=>{
                console.log(err);
                this.showSpinner=false;
            })


        },
        checkOTPvalue(){

           axios.post('/api/checkOTP',{userEmail:this.userEmail,userOTP:this.userOTP,userPassword:this.userPassword})
           .then(res=>{
               console.log("Thihs is the response",res)
           })
           .catch(err=>{
               console.log("This is the error",err)
           })
        },
        popUpMessage(error){
            console.log(this.errors,"before")
            this.errors.pop(error);
            console.log(this.errors,"after")
        }
    }

}
</script>

<style scoped>
a{


font-size: 22px;
text-decoration: none;
}

strong{
    border-radius: 5px;

    font-family: 'Potta One', cursive;
}
</style>