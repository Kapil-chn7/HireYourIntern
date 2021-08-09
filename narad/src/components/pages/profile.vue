<template>
    <div>
        <slot1>
        <signupcomp v-if="loginform" />
        <profilecomp v-if="showPopupval" @join="signup" @login="signin"/>
        </slot1>

        
    </div>


</template>

<script>
import slot1 from '../profilecomp/slot1'
import signupcomp from '../profilecomp/signupcomp'
import profilecomp from '../profilecomp/signuporlogin'
export default {
    name:'headercomp',
    components:{
        profilecomp,
        slot1,
        signupcomp
    },
    data(){
        return{
            showPopupval:true,
            loginform:false
        }
    },
    methods:{
        signup(event){
             
            
             this.showPopupval=false;
            this.loginform=event;
        },
        signin(event){
           
            this.showPopupval=event;
            this.loginform=false;
        }

    }

    
}
</script>

<style scoped>
    
    div{
        width:100vw;
        height: 50px auto;
        border:0px solid black;
    }

</style>