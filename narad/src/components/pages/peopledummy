<template>
<div>
<div v-if="showSpinner==true">
   <LoopingRhombusesSpinner
                :animation-duration="2500"
                :rhombus-size="15"
                color="red"
                id="spinner"
                />

</div>

<div v-else>
    
    <form  enctype="multipart/form-data">
        <h1>Edit Your Profile</h1>
        <label for="username">
            <input name='userName' type="text" placeholder="Enter Account name " maxlength="15" v-model="userName">
        </label>
        <label for="userPhoto">
            <input name='userImage' type="file" placeholder="Choose File" @change="uploadfile" >
        </label>
        <label for="userDescription">
            <input name='userDescription' type="text" placeholder="Words to describe you" maxlength="40" v-model="userDescription">
        </label>
        <label for="userGraduation">
            <input name='userDescription' type="text" placeholder="Graduation Status" maxlength="40" v-model="userGraduationStatus">
        </label>
        <label for="userAchievments" id="userAchievmentsId">
            Linkdin:<input type="url" placeholder="Links" maxlength="30" v-model="userLinkdin">
            Internshala:<input type="url" placeholder="Links" maxlength="30" v-model="userInternshala" >
            Github:<input type="url" placeholder="Links" maxlength="30" v-model="userGitHub">
            Facebook:<input type="url" placeholder="Links" maxlength="30" v-model="userFacebook">
            Instagram:<input type="url" placeholder="Links" maxlength="30" v-model="userInstagram">
        </label>
        <label for="username">
            <input type="url" placeholder="Your website" maxlength="10" v-model="userWebsite">
        </label>
        <label for="username">
            <input type="text" placeholder="Hiring Status" maxlength="10" v-model="userHiringStatus">
        </label>
        
        
        <label for="btn">
            <button @click.prevent class="login-btn" @click="editProfile">Edit</button>
        </label>
        
        
    </form>
</div>

</div>
</template>


<script>
import { LoopingRhombusesSpinner } from 'epic-spinners'

import axios from 'axios'
export default {
    name:'editProfile',
    components:{
        LoopingRhombusesSpinner
    },
    data(){

        return{
            file:null,
            userName:null,
            userDescription:null,
            userGraduationStatus:null,
            userImage:null,
            userHiringStatus:null,
            userWebsite:null,
            userLinkdin:null,
            userFacebook:null,
            userInstagram:null,
            userInternshala:null,
            userGitHub:null,
            showSpinner:false
              
        }
    },
    methods:{

        uploadfile(event){
            this.file=event.target.files[0];
            console.log("This is the file",this.file)
        },
        editProfile(){
            this.showSpinner=true;
            console.log("This is the file",this.file)
            var datavalue={
                    userName:this.userName,
                    userDescription:this.userDescription,
                    userGraduationStatus:this.userGraduationStatus,
                    userImage:this.userImage,
                    userHiringStatus:this.userHiringStatus,
                    userWebsite:this.userWebsite
                
                }

            var userAchievments={
                        userLinkdin:this.userLinkdin,
                        userFacebook:this.userFacebook,
                        userInstagram:this.userInstagram,
                        userInternshala:this.userInternshala,
                        userGitHub:this.userGitHub
                    }
            let formdata=new FormData();
            
            console.log("thsdadf",datavalue);
            if(this.file!=null){
                  formdata.append('userImage',this.file,this.file.name)
            }
            else{
                formdata.append('userImage',null)
            }
          
           Object.entries(datavalue).forEach(([key, value]) => {
    formdata.append(key, value);
            });
            Object.entries(userAchievments).forEach(([key, value]) => {
    formdata.append(key, value);
            });
                console.log("This is the data")
           
                axios.post('/api/updateProfile',formdata)
            .then(resp=>{
                this.showSpinner=false;
                console.log("this is the response",resp);
                this.$router.push('/account');
            })
            .catch(err=>{
                this.showSpinner=false;
                console.log("This is the err",err)
            })
           
        }

    }
}
</script>


<style scoped>

div{
    width:100%;
    height:90vh;
    background-color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 64px;

}

form{
    display:flex;
    flex-direction: column;
    margin:10px;
    
}
#userAchievmentsId{
    display:flex;
    flex-direction: column;
      margin:10px;
      

}
input{
    width:400px;
    height: 40px;
}
#spinner{
    position: absolute;
    top:300px;
    left: 50%;
}
</style>