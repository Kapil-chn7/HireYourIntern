<template>
    <div class="col-1">

<input type="text" placeholder="Enter User Name" v-model="username">
<input type="text" placeholder="Please Enter Email" v-model="useremail">
<input type="text" placeholder="Please Enter your password" v-model="userpassword">
<input type="checkbox">
<button>Proceed</button>
<input type="text" placeholder="Enter your 8 character OTP" v-model="OTP">
<button @click.prevent="fun1">Submit</button>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'signup',
    data(){
        return{
            username:'',
            useremail:'',
            userpassword:'',
            OTP:''

        }
    },
    methods:{
       async fun1(){
            const userdata={
                 useremail:this.useremail,
                username:this.username,
                userpassword:this.userpassword,
                OTP:this.OTP
            }
            console.log("This is the userdata",userdata);
           await axios.post('/api/signup',userdata)
            .then(resp=>{
                console.log("inside of teh resp console",resp)
            })
            .catch(err=>{
                console.log("this is the err",err)
            })
        }
    }
}
</script>

<style scoped>
div input{
    height:50px;
    width:600px;
    padding:10px;

}

.col-1{
    position: relative;
    top:80px;
    width:70%;
    height: 80vh;
    background-color: white;
    
}
</style>