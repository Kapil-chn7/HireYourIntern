<template>
    <div class="col">
        <div class="col-0">
           <strong @click="$emit('login',true)">LOGIN</strong>
           <strong @click="$emit('join',true)">

               <router-link to="/join">
               JOIN
               </router-link>
           </strong>
        </div >

        <div class="col-01">
            <i class="fab fa-google" @click="googleauthentication"></i>
            <i class="fab fa-facebook-f"></i>
        </div>
        <div class="col-1">
    <form>
        <label for="username">
            <input type="text" placeholder="Enter user name " maxlength="10">
        </label>
        <label for="userpassword">
            <input type="password" placeholder="Enter password " maxlength="8">
        </label>
        <label for="btn">
            <button @click.prevent class="login-btn" @click="fun2">Login</button>
        </label>
        <div class="router-link">
            <router-link to="/Profile/signup">RESET YOUR PASSWORD</router-link>
        </div>
        
    </form>
  
    </div>
   

        
    </div>


</template>

<script>
import axios from 'axios'
export default {
    name:'profilecomp',
    data(){
        return{
            content:'',
            showPopup:''
        }
    },
//     mounted() {
//   this.$nextTick(function () {
//     // Code that will run only after the
//     // entire view has been rendered
//     var loggedIn=false;
//     var cookieValue=this.$cookies.get('session_Id') 
//     console.log("value",cookieValue);
//     if(cookieValue==null){
//         loggedIn==false;
//     // this.$router.push('/login')
//     }
//     else{
//         axios.post('/api/validateUser',cookieValue)
//         .then(resp=>{console.log("User exist",resp)})
//         .catch(err=>console.log("This is the error",err))
//     }
//   })
// },
    methods:{
        fun2(){
            
           
            this.$emit('showPopup',true);
            // axios.get('/api/auth').then(res=>{
            //     console.log("this is the axios get",res);
            //      this.$router.push('/home');
                
            // })
            // .catch(err=>{
            //     console.log("this is the err",err);
            // })
        },

        async googleauthentication(){

            // axios.get('/api/auth/google')
            // .then((resp)=>{
            //     console.log("This is the entry",resp);
            // })
            // .catch(err=>{
            //     console.log("This is the error",err);
            // })

        console.log("Inside of google authentication ................")
            try{
                

                const googleUser = await this.$gAuth.signIn()
                // googleUser.getId() : Get the user's unique ID string.
                // googleUser.getBasicProfile() : Get the user's basic profile information.
                // googleUser.getAuthResponse() : Get the response object from the user's auth session. access_token and so on
               
                const data={
                    userId:googleUser.getId(),
                    userProfile:googleUser.getBasicProfile(),
                    access_token:googleUser.getAuthResponse().access_token
                }
            console.log("data.................",data)
    

            axios.post('/api/auth/signin',data)
            .then(resp=>{console.log("Signin already",resp);
                    console.log("Thiss is the response0",resp)
                    this.$gAuth.isAuthorized=true;
                     this.isSignIn = this.$gAuth.isAuthorized;
                     console.log("User is signedin");
                     var path=this.$store.getters.getPath;
                     console.log("THis is the path",path)
                     this.$router.push(path);
            
                    }
            
            )
            .catch(err=>{
                console.log("Something went wrong",err);
            })


            }


            catch(err){

                    console.log("Error",err)
            }


        }
    }

    
}
</script>

<style scoped>
    
    .col{
        width:100%;
        height: 75vh ;
        border:3px solid red;
        background-color: #ddd;
        position: relative;
        top:70px;
        display: flex;
        justify-content: center;
        
        
    }
    .col-0{
        position: absolute;
        top:10px;
        height: 40px;
        width: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        font-size: 30px;

    }
strong{
    border-radius: 5px;
    background-color: yellow;
    font-family: 'Potta One', cursive;
}
.col-01{
    position: absolute;
    width:400px;
    height: 45px;
    top:80px;
    display: flex;
    justify-content: space-around;
}
.col-1{
    position: absolute;
    top:130px;
    width:400px;
    height: 55vh;
    border:3px solid black;
}

form input{
    width: 300px;
    height: 55px;
    margin: 15px;
    border-radius: 10px;
}

label {
    display: flex;
    justify-content: center;
    align-items: center;
}
.col-2{
    position: absolute;
    width: 100%;
    height: 50px;
    top:400px;
}

.login-btn{
width: 300px;
height: 55px;
margin: 15px;
border-radius: 10px
}
.router-link{
position: absolute;
top:300px;
width:400px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
}
form a{
    text-decoration: none;
    font-size: 17px;
    margin: 40px;
}

i{
    font-size: 40px;
    font-weight: 600;
    color: skyblue;
}
</style>