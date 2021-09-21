<template>
    <div class="container">
        <div class="row">
            <div class="col d-flex flex-column" v-for="link in links" :key="link">

                    <a :href="link">{{'User'+link}}</a>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    
    data(){
        return{
            links:['a','b','c']
        }
    }
}
</script>
<style scoped>

div{
   
}
</style>