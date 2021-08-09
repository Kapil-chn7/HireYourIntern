<template>
    <div class="col">
        <div class="col-0">
           <strong @click="$emit('login',true)">LOGIN</strong>
           <strong @click="$emit('join',true)">JOIN</strong>
        </div >
        <v-slot>
            
        </v-slot>
        
    </div>
</template>

<script>
export default {
    name:'slot1'
}
</script>

<style scoped>

  .col-0{
        position: absolute;
        top:10px;
        height: 40px;
        width: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        font-size: 30px;

    }
    .col{
        width:100%;
        height: 75vh ;
        border:3px solid red;
        position: relative;
        display: flex;
        justify-content: center;
        
        
    }

</style>