<template>
    <div class="box1">
      
           <div class="box21">
             
            
            <div id="spanval"  v-for=" key in Object.keys(userAchievments)" :key="key" >
                {{key}}  {{userAchievments[key]}}
            </div>
            <br>
             <!-- <span>
                 <strong>
                     College:
                 </strong>
             </span>
               <span>
                 <strong>
                     Location:
                 </strong>
             </span>
               <span>
                 <strong>
                     Marks:{{userAchievments}}
                 </strong>
             </span> -->

           </div>

           <div class="box22">
               
               <img :src="userImageUrl" >
               

           </div>

           <div class="box23">
               vvvvvvvvvvvvvvnnnnnnnnnnnnnnnnnnnnnnn
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Debitis culpa saepe delectus voluptas porro fuga iure eos accusamus 
            libero voluptate. Quaerat sed placeat optio ad vel quae soluta, in
             accusantium, deleniti error officia voluptatem magnam totam expedita 
             maiores cumque iure.   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Debitis culpa saepe delectus voluptas porro fuga iure eos accusamus 
            libero voluptate. Quaerat sed placeat optio ad vel quae soluta, in
             accusantium, deleniti error officia voluptatem magnam totam expedita 
             maiores cumque iure.   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Debitis culpa saepe delectus voluptas porro fuga iure eos accusamus 
            libero voluptate. Quaerat sed placeat optio ad vel quae soluta, in
             accusantium, deleniti error officia voluptatem magnam totam expedita 
             maiores cumque iure.   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Debitis culpa saepe delectus voluptas porro fuga iure eos accusamus 
            libero voluptate. Quaerat sed placeat optio ad vel quae soluta, in
             accusantium, deleniti error officia voluptatem magnam totam expedita 
             maiores cumque iure.   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Debitis culpa saepe delectus voluptas porro fuga iure eos accusamus 
            libero voluptate. Quaerat sed placeat optio ad vel quae soluta, in
             accusantium, deleniti error officia voluptatem magnam totam expedita 
             maiores cumque iure.   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Debitis culpa saepe delectus voluptas porro fuga iure eos accusamus 
            libero voluptate. Quaerat sed placeat optio ad vel quae soluta, in
             accusantium, deleniti error officia voluptatem magnam totam expedita 
             maiores cumque iure.   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Debitis culpa saepe delectus voluptas porro fuga iure eos accusamus 
            libero voluptate. Quaerat sed placeat optio ad vel quae soluta, in
             accusantium, deleniti error officia voluptatem magnam totam expedita 
             maiores cumque iure.
           </div>





    </div>
</template>


<script>
export default {
   data(){
       return{
     
       }
   },
   computed:{
       userAchievments:function(){
           return this.$store.state.userProfile.userdata.userDetails;
       },
       userImageUrl:function(){
           console.log("User Image url",this.$store.state.userImage)
        return `data:image/jpeg;base64,${this.$store.state.userImage}`
       }
   }
   ,
   watch:{
       '$store.state.userProfile':function(){
           console.log("This is",this.$store.state.userProfile.userdata.userName);
          this.userAchievments=this.$store.state.userProfile.userdata.userAchievments;
        //    for(var key of Object.keys(userAchievments)){

        //         console.log("thisis the key",key,userAchievments[key])

        //    }
       }
   }
}
</script>

<style scoped>


.box2 >div{
    background-color: olivedrab;
    margin:1em;
}

.box22{
    grid-column: 2;
    grid-row:1/3;
    min-height: 300px;
    min-width: 300px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.box21{
    grid-column: 1/4;
    grid-row:3/4;
    min-height: 150px;
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
    
}
.box2{
   
    background-color: #eee;
     grid-column: 2;
     grid-row: 1/5;
     overflow:auto;
     display: grid;
     grid-template-rows: auto;
     grid-template-columns: 1fr 2fr 1fr;
     grid-gap:1em;
     
}
img {
  max-width:300px;
  height: 300px;
}

#spanval{
    position: relative;
    
    
}
</style>