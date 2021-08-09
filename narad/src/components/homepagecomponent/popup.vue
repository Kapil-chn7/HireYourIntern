<template>

    <div class="col-post">

    <span class="inputpost" @click="fun" >
        What's in your mind
    </span>
   
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            active:false
        }
    },
    methods:{
        fun(){
            var blur=document.getElementById('blur');
            blur.classList.toggle('active');
              var popup=document.getElementById('popup');
            popup.classList.toggle('active');
        }
    }
}
</script>

<style scoped>


.inputpost{
 width:400px;
 height:60px;
 position:absolute;
 top:10px;
 border:1px solid black;
 border-radius: 20px;
 padding:20px;
 font-size: 22px;
 font-weight: 500;
 box-shadow: 3px 4px 50px grey;



}
.inputpost:hover{
    cursor: pointer;
}
.col-post{
    width:740px;
    height: 140px;
    background-color: green;
    padding:15px;
    margin-top:0px;
   
}


</style>