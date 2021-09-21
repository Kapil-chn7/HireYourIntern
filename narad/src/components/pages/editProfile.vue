<template>
<div class="col1editProfile">
<div v-if="showSpinner==true">
   <LoopingRhombusesSpinner
                :animation-duration="2500"
                :rhombus-size="15"
                color="red"
                id="spinner"
                />

</div>

<div v-else>
<div class="container">
    <form method="POST" action="/api/editUserProfile" enctype="multipart/form-data" >
        <div class="form-row">
            <div class="col-lg-4 col-md-5 offset-md-0 offset-lg-1 ">
                <div class="form-group m-3">
                    <label for="userNameDescription">Name</label>
                    <input type="text" class="form-control" id="userNameDescription" aria-describedby="emailHelp" placeholder="Enter Name" maxlength="15" name="userName"  required>
                    <small id="emailHelp" class="form-text text-muted">Name should not exceed 15 characters</small>
            </div>

            </div>

            <div class="col-lg-4 col-md-5 offset-md-1 offset-lg-2 offset-md-1 ">

                    <div class="form-group m-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="userEmail" :value="userProfile.userProfileData.userEmail" required>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            </div>
            <div class="col-lg-4 col-md-5 offset-md-0 offset-lg-1 ">
                <div class="form-group m-3">
                    <label for="enterTags">Tags</label>
                    <input type="text" class="form-control" id="enterTags" aria-describedby="emailHelp" placeholder="Please enter tags seperated by #" name="userTags" required>
                    <small id="emailHelp" class="form-text text-muted">Example Node.js# Vue.js</small>
            </div>

            </div>

            <div class="col-lg-4 col-md-5 offset-md-1 offset-lg-2 offset-md-1 ">

                    <div class="form-group m-3">
                        <label for="exampleFormControlFile1">Change Your Profile</label>
                        <input type="file" class="form-control-file" name="userProfileImage" id="exampleFormControlFile1">
                    </div>
            </div>
            <div class="col-lg-4 col-md-5 offset-md-0 offset-lg-1">
              <div class="form-group m-3" >
                <label for="sel1">Enter Your State</label>
                <select class="form-control" name="userState" value="Delhi" id="sel1">

                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>

                    
                </select>
                </div>
                
                  
         </div>
                     <div class="col-lg-4 col-md-5 offset-md-1 offset-lg-2 ">
                         <div class="form-group m-3">
                         <span class="" style="font-weight: bold;">Gender</span>
                         <div class="container pl-3" >
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="userGender" id="inlineRadio1" value="male" checked="checked">
                            <label class="form-check-label" for="inlineRadio1">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="userGender" id="inlineRadio2" value="female">
                            <label class="form-check-label" for="inlineRadio2">Female</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="userGender" id="inlineRadio3" value="others">
                            <label class="form-check-label" for="inlineRadio3">others</label>
                            </div>
                            </div>
                            </div>

                  
         </div>
                     <div class="col-lg-4 col-md-5  offset-lg-1 offset-md-0 ">

                    <div class="form-group m-3">
                    <label for="enterCollegeName">Enter Your College</label>
                    <input type="text" class="form-control" id="enterCollegeName" aria-describedby="emailHelp" placeholder="Your college name" name="userCollege" >
                    <small id="emailHelp" class="form-text text-muted">Enter your college name.</small>
            </div>
            </div>

                   <div class="col-lg-4 col-md-5 offset-md-1 offset-lg-2 offset-md-1 ">

                    <div class="form-group m-3">
                    <label for="enterAge">Date Of Birth</label>
                    <input type="date" class="form-control" id="enterAge" aria-describedby="emailHelp" name="userAge" required>
                    <small id="emailHelp" class="form-text text-muted">Enter your Age in years</small>
            </div>
            </div>
                                 <div class="col-lg-4 col-md-5  offset-lg-1 offset-md-0 ">

                    <div class="form-group m-3">
                    <label for="enterLinkdin">Linkdin Profile</label>
                    <input type="text" class="form-control" id="enterLinkdin" aria-describedby="emailHelp" name="userLinkdin" placeholder="Provide your linkdin profile">
                    <small id="emailHelp" class="form-text text-muted">Enter your college name.</small>
            </div>
            </div>

                   <div class="col-lg-4 col-md-5 offset-md-1 offset-lg-2 offset-md-1 ">

                    <div class="form-group m-3">
                    <label for="enterGithubProfile">Enter Github Profile</label>
                    <input type="text" class="form-control" id="enterGithubProfile" aria-describedby="emailHelp" name="userGithub">
                    <small id="emailHelp" class="form-text text-muted">This is optional</small>
            </div>
            </div>

           <div class="col-lg-4 col-md-5  offset-lg-1 offset-md-0 ">

                    <div class="form-group m-3">
                    <label for="enterYourBranch">Enter Your Branch</label>
                    <input type="text" class="form-control" id="enterYourBranch" aria-describedby="emailHelp" placeholder="Please provide your field of specility" name="userBranch">
                    <small id="emailHelp" class="form-text text-muted">Please provide your branch</small>
            </div>
            </div>

                <div class="col-lg-4 col-md-5 offset-md-1 offset-lg-2 offset-md-1 ">

                    <div class="form-group m-3">
                        <label for="resumefile">Provide Your resume</label>
                        <input type="file" class="form-control-file" id="resumefile" name="userResume">
                    </div>
            </div>



                   <div class="col-lg-4 col-md-5 offset-md-0 offset-lg-1  ">

                    <div class=" form-group m-3">
                    <label for="joiningdate">Starting date</label>
                    <input type="date" class="form-control" id="joiningdate" aria-describedby="emailHelp" name="userCollegeJoiningDate">
                    <small id="emailHelp" class="form-text text-muted">When did you join your college  </small>
            </div>

            </div>
                   <div class="col-lg-4 col-md-5 offset-md-1 offset-lg-2 offset-md-1 ">
                        <div class="col form-group ">
                    <label for="endingdate">Expected date of complition</label>
                    <input type="date" class="form-control" id="endingdate" aria-describedby="emailHelp" name="userCollegeEndingDate">
                    <small id="emailHelp" class="form-text text-muted">When will you end your college </small>

            </div>
                   </div>

                              <div class="col-lg-7 col-md-9 offset-md-1 offset-lg-2 ">

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="userDescription"></textarea>
                            </div>
            </div>
                                         <div class="col-lg-4 col-md-4 offset-md-4 offset-lg-4  ">

                            <div class="form-group row justify-content-center">
                             
                                <button type="submit" class="btn btn-primary btn-lg">Edit Profile</button>
                            </div>
            </div>
             

        </div>
    </form>
    
</div>

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

    },
    computed:{
        userProfile(){
            console.log("sdfadf",this.$store.state.userProfile)
            return this.$store.state.userProfile;
        }
    },
      beforeMount(){
        // this.$store.state.showLoader=true;
        this.$store.dispatch('getUserData');

    }
}
</script>


<style scoped>

.col1editProfile{
    position: relative;
    top:70px;
    width:100%;
    height: 90vh;
   background-color: white;
   overflow: scroll;
}
/* div{
    width:100%;
    height:90vh;
    background-color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 64px;

} */

/* form{
    display:flex;
    flex-direction: column;
    margin:10px;
    
}
#userAchievmentsId{
    display:flex;
    flex-direction: column;
      margin:10px;
      

}
*/
/* input{
    width:400px;
    height: 40px;
} */
#spinner{
    position: absolute;
    top:300px;
    left: 50%;
} 
</style>