<template>
    <div class="container">
        <div class="row">
            <div class="col" >
                        <div class="row">
                            <router-link to="Search">
                            <span>
                                collaborate into another Project
                                <i class="fas fa-plus"></i>
                            </span>
                            </router-link>
                        </div>
            </div>
            </div>
        <div class="row">
 
                <div class="row" v-for="link in links" :key="link">
                    <center>
                          <a :href="link">
                        User{{link}}
                    </a>
                    </center>
                </div>
                
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            links:['a1','a2','a3']
        }
    }
}
</script>
<style scoped>

div{
    /* background-color: rgb(20, 5, 5); */
}
</style>
