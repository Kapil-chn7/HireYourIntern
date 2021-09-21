<template>


    <div class="container container1div d-flex flex-column bg-success " >
        <div class="col ">
        <div class="row m-4">
               
                    <img src="" >
               
        </div>
        <div class="row m-4">
            <div class="col">
              
                 {{userProfile}}
              
            </div>
        </div>
        <div class="row m-4" >
            <div class="col">
                
                    <span>
                        Add Status
                        <i class="fas fa-plus"></i>
                    </span>
             
            </div>
        </div>
        <div class="row m-4">
            <div class="col">Post</div>
            <div class="col">Description</div>
            <div class="col">Friends</div>
            <div class="col">Intrests</div>
            <div class="col">Projects</div>
            <router-link to="/editProfile">Edit Profile</router-link>
            
        </div>
        <div class="row">
           
             <div v-for="image in Images" :key="image" class="row box234">
                   <p>vALUE</p>
                   {{image}}
              
                       <img src="./logo.png" class="img-fluid">
                 

            </div>
         
        </div>
    </div>
    </div>
</template>


<script>

export default {
    name:'profilecard',
   data(){
       return{
     Images:['./logo.png','./logo.png','./logo.png','./logo.png']
       }
   },
   computed:{
       userProfile(){
           
           

           return this.$store.state.userProfile;
       }
//    ,
//    watch:{
//        '$store.state.userProfile': function(){
          
//         //    console.log("This is",this.$store.state.userProfile.userdata.userName);
//         //   this.userAchievments=this.$store.state.userProfile.userdata.userAchievments;
//         //    for(var key of Object.keys(userAchievments)){

//         //         console.log("thisis the key",key,userAchievments[key])

//         //    }
//                 alert("hi")
//         // for(var key in this.$store.state.userProfile){
//         //             console.log("Kye and value",key);
//         // }
//        }
//    }
   }
}
</script>

<style scoped>

/* 
div{
    background-color: green;
    margin:1em;
} */
.container1div{
    height: 90vh;
    overflow: scroll;
}
.box22{
    grid-column: 2;
    grid-row:1/3;
    min-height: 200px;
    min-width: 200px;
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 200px;
    overflow: hidden;
    justify-content: center;
}

.box21{
    grid-column: 1/4;
    grid-row:3/4;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:40px;
    font-size: 20px;
    font-family: 'Kirang Haerang', cursive;
    overflow: scroll;
    margin-top: 100px;
    
    
    
    
    
}

.box23{
    grid-column: 1/4;
    grid-auto-rows: 130px;
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   align-items: center;
    
    
}
.box234{
    margin: 20px;
    width:300px;
    height:300px;
    background-color: rgb(139, 15, 15);
    
}
.box234 img{
    height: 100%;
    width:100%;
}

/* img {
  max-width:300px;
  height: 300px;
 
} */

#spanval{
    position: relative;
    
    
}
.row-1{
    font-size: 28px;
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif;
    margin-left: 5px;
    color: black;
    
}
.row-2{
    font-size: 20px;
    margin-top:10px;
    font-family: 'Roboto', sans-serif;
    color: #97A1A2;
}
.row-3{
    font-size:24 ;
    margin-top:10px;
    font-family: 'Roboto', sans-serif;
    color: #97A1A2;
}

.row-4{
    color:#C3CDBD;
    font-size: 17px;
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
}
.row-5{
    color:#C3CDBD;
    font-size: 17px;
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
}
.row-6{
    color:#C3CDBD;
    font-size: 17px;
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
}
</style>