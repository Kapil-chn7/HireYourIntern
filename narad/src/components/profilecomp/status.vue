<template>
    <div  class="status-0"  >

        <span v-for="data in datas" :key="data">
      <div class="status-1" >
    {{data}}
      </div>
    </span>
 
    </div>
</template>

<script>
export default {
    name:'status',
    data(){

        return{
            datas:["kapil","ashish","satish","mamta"]
        }
        
    }
}
</script>


<style scoped>

   .status-1{
     
        top:20px;
       width:140px;
       height:200px;
       background-color: yellow;
       border-radius: 10px;
       margin:5px;
       display: flex;
      
   }

     .status-0{
       position: absolute;
       top:70px;
       width:760px;
       margin-left: 10px;
       height:224px;
       background-color: white;
       overflow:auto;
        display: flex;
       flex-direction: row;
     
   }
   h1{
       color: black;
   }
   span{
      
       flex-direction: row;
   }
</style>