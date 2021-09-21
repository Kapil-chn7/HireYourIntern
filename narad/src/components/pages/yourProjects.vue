<template>
    <div id="cardcol1" class="container-fluid">
        <div class="row">
        <div v-for="userDetails in userData" :key="userDetails" class="d-flex pb-4 col-sm">
<div class="flex-fill card" style="width:400px" >

  <span >
  <h5 class="d-inline w-75 ml-3 ">{{getTime(userDetails.createdAt).date}}</h5>
  <h5 class="d-inline w-75 pl-5">{{getTime(userDetails.createdAt).time}}</h5>
  </span>
    <img class="w-75 h-70 rounded  card-img-top" src="../././accountcomp/unnamed.jpg" alt="Card image">
  <div class="card-body">
    <h4 class="card-title">{{userDetails.projectDetails.titledata}}</h4>
    <!-- <p class="card-text">{{userDetails.projectDetails.textDescriptiondata}}</p> -->
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" @click="changeData(userDetails)">
  See Description
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{{userDetails.projectDetails.titledata}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <h5> {{`By ${Name}:`}}</h5> 
        {{Description}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
  </div>
</div>
</div>
</div>
</div>

</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            userData:null,
            Description:null,
            Name:null
        }
    },
    // watch:{
    //     userData:function(newValue,oldValue){
    //      console.log("e",newValue,oldValue)
    //     }

    // },
    beforeCreate(){

        axios.post('/api/getUserPost')
        .then((res)=>{
            
            this.userData=res.data.userOwnProjects;

         
        
        })
        .catch(err=>{
            console.log("Err",err)
        })
    },
    methods:{
        changeData(obj){

            this.Description=obj.projectDetails.textDescriptiondata;
            this.Name=obj.projectDetails.userNamedata
        },

    getTime(stringDateAndTime){

            var  date = new Date(stringDateAndTime);
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var dt = date.getDate();

            if (dt < 10) {
            dt = '0' + dt;
            }
            if (month < 10) {
            month = '0' + month;
            }
            
            var dateIST=`${dt}-${month}-${year}`
           
                    
                    var myDate = stringDateAndTime;
            var time = new Date(myDate).toLocaleTimeString('en',
                            { timeStyle: 'short', hour12: true, timeZone: 'UTC' });  
                var timeIST=time;


                return {
                    date:dateIST,
                    time:timeIST
                }
    },
    popover(){
        alert("hi")
    }
    }
}
</script>

<style scoped>
#cardcol1{
    width:100%;
    height: 90vh;
    top:10vh;
    background-color: pink;
    position: relative;
    overflow: scroll;
    
}
</style>