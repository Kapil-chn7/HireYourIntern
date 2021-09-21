<template>
    <div class="parent">


        <div class="cls1">

            <input type="text" placeholder="Search Profiles">
        </div>
        <div class="cls2">

            <!-- <accountcomp  v-show="friends" class="box2"/> -->
        </div>
    </div>
</template>


<script>
// import accountcomp from '../accountcomp/profilecard'
export default {
    
    components:{
        // accountcomp
    },
    data(){
        return {
            friends:true
        }
    }
}
</script>

<style scoped>
    
.parent{
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    position: absolute;
    top:70px;
    width:100%;
    height: 80vh;
    background-color: white;
    grid-gap:1em;

}
.parent >div{
    background-color: #ddd;
}
.cls1{
    overflow:auto;
    
}
.cls2{
  overflow: auto;
}

</style>