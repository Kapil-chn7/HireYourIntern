<template>
    <div class="container-fluid navbar navbar-expand-lg navbar-light  bg-danger" id="bigcontainer" >
        
            
            <span class="navbar-brand">InternsAdda <sidebar/></span>
            

             <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navtoggler">
                <span class="navbar-toggler-icon"></span>
            </button>  
            <div class="collapse navbar-collapse " id="navtoggler">

                <ul class="container w-md-50  navbar-nav mr-auto mb-md-4 mr-md-5 mb-sm-4 mr-mr-sm-5">
                <li class="nav-item col d-flex justify-content-around" >

                           <router-link to="/home">
       
                                <i class="fas fa-home"></i>
                                <span  id="spanlink">
                                    Home
                                </span>
                                
                                </router-link>
             

                           <router-link to="/people">
       
                                
                                <i class="fas fa-users"></i>
                                <span  id="spanlink">
                                    People
                                </span>
                                
                                </router-link>
      

                           <router-link to="/Search">
       
                                <i class="fas fa-globe"></i>
                                <span  id="spanlink">
                                    Globe
                                </span>
                                
                                </router-link>
           

                        <router-link to="/createProject">

                    <i class="fas fa-project-diagram"></i>
                    <span id="spanlink">
                        Create Project
                    </span>
                    </router-link>
                </li>
            </ul>

            <form @submit.prevent class="form-inline">
                <input type="search" class="form-control mr-sm-2" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0">Search</button>
            </form>

            </div>
        
    </div>


  
  <!-- </div> -->


</template>

<script>
import sidebar from "./sidebar.vue"
export default {
    name:'headercomp',
components:{
    sidebar
}
    
}
</script>

<style scoped>


.bigcontainer{
     z-index: 1;
}
 
      a{
        font-size: 25px;
        text-decoration: none;
        font-family: 'Potta One', cursive;
    }

  
   #spanlink{
        position: relative;
        visibility: hidden;
        top:30px;
        margin-left: -40px;
        font-size: 15px;
        color: white;
        background-color: black;
        border-radius: 5px;
    }
    a:hover #spanlink{
        visibility: visible;
        
    }
</style>