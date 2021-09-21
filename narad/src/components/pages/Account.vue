<template>
   <div>

              <div v-if="showLoader" >
        <LoopingRhombusesSpinner
                :animation-duration="2500"
                :rhombus-size="15"
                color="white"
                id="spinner" />
    </div>

         
       <div  v-else class="container bg-danger " >
           
      <profilecard class="col-lg-6  col-md-10 "/>

          
       </div>

     
   </div>
 



    
  
</template>

<script>
import { LoopingRhombusesSpinner } from 'epic-spinners'

import profilecard from '../accountcomp/profilecard.vue'
export default {
  components: { profilecard,
  LoopingRhombusesSpinner },
    name:'Account',
  
    data(){
        return {

            showLoader:true
        }
    }
,
    watch:{
        '$store.state.showLoader':function(){
            this.showLoader=this.$store.state.showLoader;
            
        }
    }
,
    beforeMount(){
        this.$store.state.showLoader=true;
        this.$store.dispatch('getUserData');

    }
}
</script>


<style scoped>

#spinner{
    position: absolute;
    top:50vh;
    left: 50%;

    
}

.account-col1{
    position: absolute;
    height: 80vh;
    width: 100%;
    top:70px;
    background-color: white;
   
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    overflow: auto;

}

.box1{
  
    background-color: #eee;
    margin:10px;
    
}

.box3{
   
    background-color: #eee;
     margin:10px;
}
.box4{
   
    background-color: #eee;
     margin:10px;
     grid-row:2/5;
}
.box5{
     background-color: #eee;
     margin:10px;
     grid-row: 2/5;
}

/* .acc-col2{
    position: relative;
    
    width:250px;
    height: 250px;
    background-color: orange;
    
}

.account-col3{
    position: relative;
    top:0px;
    width:60%;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    
}
.account-col4{
    position: relative;
    top:500px;
    width:70%;
    height: 450px;
    background-color: orangered;
   
    
} */
</style>