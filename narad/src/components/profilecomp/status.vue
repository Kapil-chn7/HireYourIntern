<template>
    <!-- <div  class="status-0"  >

        <span v-for="data in datas" :key="data">
      <div class="status-1" >
    {{data}}
      </div>
    </span>
 
    </div> -->

    <div class="container parentdivclass  " style="background-color:red">
      
        <div class="images">
          <img src="../../components/accountcomp/logo.png" class="img-fluid" alt="">
        </div>
                <div class="images">
          <img src="../../components/accountcomp/logo.png" class="img-fluid" alt="">
        </div>
                <div class="images">
          <img src="../../components/accountcomp/logo.png" class="img-fluid" alt="">
        </div>
                <div class="images">
          <img src="../../components/accountcomp/logo.png" class="img-fluid" alt="">
        </div>
                <div class="images">
          <img src="../../components/accountcomp/logo.png" class="img-fluid" alt="">
        </div>
                <div class="images">
          <img src="../../components/accountcomp/logo.png" class="img-fluid" alt="">
        </div>
                <div class="images">
          <img src="../../components/accountcomp/logo.png" class="img-fluid" alt="">
        </div>
                <div class="images">
          <img src="../../components/accountcomp/logo.png" class="img-fluid" alt="">
        </div>
      
 
    </div>
</template>

<script>
export default {
    name:'status',
    data(){

        return{
            datas:["kapil","ashish","satish","mamta","kapil","ashish","satish","mamta"]
        }
        
    }
}
</script>


<style scoped>


.parentdivclass{
  max-width: auto;
  height: 200px;
  display: flex;
  overflow-x:auto;
}
.parentdivclass .images{
  min-width: 110px;
  height: 110px;
  line-height: 110px;
  text-align: center;
  background-color:#ddd;
  margin-left: 10px;
}
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
       position: relative;
       
       width:auto;
      
       height:224px;
       
       overflow-x:auto;
       white-space: nowrap;
      
     
   }
   h1{
       color: black;
   }
   span{
      
       flex-direction: row;
   }
</style>