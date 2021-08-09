<template>
    
        
       <div class="popcol" id="popup" >

           <div class="popup-col1">
               <h1>Create Post</h1>
               <i class="fas fa-window-close" @click="fun" id="cancel"></i>
               
               <i class="fas fa-chevron-circle-down" @click="active=!active">
                   
               </i>
               <section v-show="active" class="audience">

                   <i class="fas fa-arrow-left" @click="active=!active"></i>
                   <h1>With whom do you want to share the POST</h1>
                   <ul>
                            <li><input type="checkbox" id="friends" name="Friends" value="Friends">
                            <label for="friends"> Friends</label>
                            </li>
                            <li><input type="checkbox" id="Topics" name="Topics" value="Topics">
                            <label for="Topics"> To a particular topic</label>
                            </li>
                            <li><input type="checkbox" id="Anyone" name="Anyone" value="Anyone">
                            <label for="Anyone"> Anyone</label>
                            </li>
                </ul>
                </section>
           </div>
          
               <textarea name="Whats in your mind" id="" cols="30" rows="5" class="popup-col2" v-model="postData">hi this is me</textarea>

        
        <div class="popup-col3">
            <input type="file" id="postImage" @change="validPost">
            <label for="postImage"><i class="fas fa-images" id="postId"></i></label>
            <button @click="sendPost">Post</button>
        </div>

        
    </div>
       
    
</template>



<script>
import axios from 'axios'
export default {
    name:'sharepost',
    components:{
        
    },
    
    data(){
        return{
            active:false,
            postData:null,
            file:null
        }
    },
    methods:{
       validPost(event){
           console.log("This is teh post",event.target.files[0]);
           this.file=event.target.files[0];
       },
        fun(){
            var blur=document.getElementById('blur');
            blur.classList.toggle('active');
              var popup=document.getElementById('popup');
            popup.classList.toggle('active');

            this.active=false;
        },
        sendPost(){
            const form=new FormData();
           
           if(this.postData!=null || this.file!=null){
               form.append('body',this.postData);
               
               if(this.file!=null){
                   form.append('file',this.file,this.file.name);
               }
               form.append('time',new Date().toLocaleString())
                 axios.post('/api/userpost',form)
            .then((resp)=>{
                console.log("This is the repsonse",resp);
                this.$router.push('/home');
            })
            .catch((error)=>{
                console.log("This is the error",error)
            })
           }
         
          
        }
    }
}
</script>

<style scoped>

#popup.active{
    top:40%;
    visibility: visible;
    opacity:1;
    transition: 0.5s;
}
.popcol{
    border:1px solid black;
    width:500px;
    height: 500px;
    position: fixed;
    top:350px;
    left:740px;
    transform:translate(-50%,-50%);
    box-shadow: 0 5px 30px rgba(0,0,0,.30);
    background-color: white;
    visibility: hidden;
}
#cancel{
    float: right;
}



.popup-col1{
    position: absolute;
    top:0px;
    left:0px;
    height: 130px;
    width:100%;
    background-color: green;
}
.popup-col2{
    width:100%;
    height: 250px;
    background-color: red;
    position:absolute;
    top:130px;


}

.popup-col3{
    position: absolute;
    top:380px;
    width:100%;
    height: 120px;
    background-color: blue;
}
.audience{
    border:1px solid black;
    width:500px;
    height: 500px;
    position: absolute;
    top:0px;
    background-color: yellow;
    z-index: 1;
}
#postImage{
    display: none;
}
#postId{
    font-size: 30px;
    
}
</style>