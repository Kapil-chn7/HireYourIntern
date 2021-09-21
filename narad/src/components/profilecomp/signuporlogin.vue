<template>
    <!-- <div class="coly">
        <div class="col-0y">
           <strong @click="$emit('login',true)">LOGIN</strong>
           <strong @click="$emit('join',true)">

               <router-link to="/register">
               JOIN
               </router-link>
           </strong>
        </div >

        <div class="col-01y">
            <i class="fab fa-google" @click="googleauthentication"></i>
            <i class="fab fa-facebook-f"></i>
        </div>
        <div class="col-1y">
    <form>
        <label for="username">
            <input type="text" placeholder="Enter your Email " maxlength="20" v-model="userEmail" required>
        </label>
        <label for="userpassword">
            <input type="password" placeholder="Enter password " maxlength="10" v-model="userPassword" required>
        </label>
        <label for="btn">
            <button @click.prevent class="login-btn" @click="fun2" >Login</button>
        </label>
        <div class="router-link">
            <router-link to="/Profile/signup">RESET YOUR PASSWORD</router-link>
        </div>
        
    </form>
  
    </div>
   

        
    </div> -->

    <div class="container coly bg-success">
       
        
            <div class="container col col-lg-6 bg-dark upperPortion">
                <div class="row d-flex justify-content-around h-100">
                <div class="col d-flex justify-content-center"> <i class="fab fa-google" @click="googleauthentication"></i></div>
                  <div class="col d-flex justify-content-center"> <i class="fab fa-facebook-f"></i></div>
            </div>
            
        
            </div>
            <div class="container col col-lg-6 bg-dark">
           

            <strong @click="$emit('join',true)" class="col d-flex justify-content-center">

               <router-link to="/register">
              Register
               </router-link>
           </strong>


             
     
            </div>
            <div class="container bg-danger col col-lg-6 lowerPortion ">
            <form class="row h-100 " @submit="fun2" @submit.prevent>
                <div class="form-group">
               
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="userEmail" required maxlength="20">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                   
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="userPassword" required maxlength="10" minlength="8">
                </div>
                <button type="submit" class="btn btn-primary ">Submit</button>
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
            showPopup:'',
            userEmail:null,
            userPassword:null
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
//  mounted() {
//     let that = this;
//     let checkGauthLoad = setInterval(function() {
      
//       that.isSignIn = that.$gAuth.isAuthorized;
//       that.isInit = that.$gAuth.isInit;
//       console.log(that.isSignIn, that.isInit,"hhhhhhhhhh")
//       if (that.isInit) clearInterval(checkGauthLoad);
//     }, 5000);
//   }
// ,
    methods:{
        fun2(){
            const data={
               userEmail: this.userEmail,
               userPassword: this.userPassword
            }
           
            // this.$emit('showPopup',true);
            axios.post('/api/signin',data)
            .then(resp=>{
                console.log("This is the resp",resp);
                this.$router.push('/home')
            })
            .catch(err=>{
                console.log("This is the error",err)
            })
        },

        async googleauthentication(){

            // axios.get('/api/auth/google')
            // .then((resp)=>{
            //     console.log("This is the entry",resp);
            // })
            // .catch(err=>{
            //     console.log("This is the error",err);
            // })
            // const that=this;

        console.log("Inside of google authentication ................")
            try{
                
                console.log("This is from try")
//          this.$gAuth.signIn()
//   .then(GoogleUser => {
//     // on success do something
//     console.log('GoogleUser', GoogleUser)
//     console.log('getId', GoogleUser.getId())
//     console.log('getBasicProfile', GoogleUser.getBasicProfile())
//     console.log('getAuthResponse', GoogleUser.getAuthResponse())
//   })
//   .catch(error => {
//     console.log('error', error)
//   })
        var googleUser=await this.$gAuth.signIn()

              
               
                const data={
                    userId:googleUser.getId(),
                    userProfile:googleUser.getBasicProfile(),
                    access_token:googleUser.getAuthResponse().access_token
                }
                // const data={
                    
                // }
            console.log("data.................",data)
    

            await axios.post('/api/auth/signin',data)
            .then(resp=>{console.log("Signin already",resp);
                    console.log("Thiss is the response0",resp)
                    this.$gAuth.isAuthorized=true;
                     this.isSignIn = this.$gAuth.isAuthorized;
                     console.log("User is signedin");
                     this.$store.commit('userIsLoggedInChange',true)
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
/*     
    .coly{
        width:100%;
        height: 75vh ;
        border:3px solid red;
        background-color: #ddd;
        position: relative;
        top:70px;
        display: flex;
        justify-content: center;
        
        
    }
    .col-0y{
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
.col-01y{
    position: absolute;
    width:400px;
    height: 45px;
    top:80px;
    display: flex;
    justify-content: space-around;
}
.col-1y{
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
.col-2y{
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
} */

i{
    font-size: 40px;
    font-weight: 600;
    color: skyblue;
}
.upperPortion{
    height: 70px;
}
.lowerPortion{
    height: 300px;
}
strong{
    border-radius: 5px;

    font-family: 'Potta One', cursive;
}
a{


font-size: 22px;
text-decoration: none;
}
</style>