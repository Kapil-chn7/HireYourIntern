<template>
    <div class="col-1">

<h1>hello</h1>
<header1/>
<sharepost/>

    </div>
</template>

<script>
import header1 from "./header"


export default {
    name:'homepagecomp',
    components:{
        header1,
        sharepost
    }
}
        
</script>


<style scoped>

.col-1{
    border:1px solid yellow;
    height:900px;
    width:900px;
    background-color: yellow;
}
</style>