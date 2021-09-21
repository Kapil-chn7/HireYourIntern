<template>
<!-- <div class="container parentdiv1">
        <div id="mySidebar" class="col sidebar row">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
         <section class="col">
            <ul>
                 <li>
                <span>

                    <i class="fas fa-user-alt"></i>
                   <label>

                        <router-link to="/account">
       
                     
                        Account
       
                    </router-link>
                   </label>
                    
                    </span> 
                    </li>
               
                    <li>
                         <span>
                             
                             <i class="fas fa-users-cog"></i>
                             <label>
                                 <router-link to="/projects" >
                                     Your Projects
                                 </router-link>
                             </label>

                              </span>
                         </li>
                    
                    
                    <li>
                        <span> 
                            <label for="">
                            <router-link to="/teams">
                                Teams
                            </router-link>
                            </label>

                            </span> 
                        </li>
                    
     
                    
                    
              
                      
                
                    
                    <li>
                        <span> 

                             <label for="">
                            <router-link to="/collaborate">
                                Collaborate
                            </router-link>
                             </label>
                            </span>
                        </li>
                    
                     
                
                    
                     <li>
                         
                         <span>

                             <i class="fas fa-search-location"></i>
                             <label >
                         
                             <router-link to="/signup">
                             SignUp or login</router-link>
                             
                             </label>
                             </span></li>
                     
                      
                
                    
                
                    
                    
            </ul>
        </section>

</div>
</div> -->

<span class="d-lg-none" id="main">
  <button class="openbtn" @click="openNav" v-show="downnavisActive">

      <i class="fas fa-chevron-right"></i>
  </button>
 
</span>
<div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
 <section class="col">
            <ul>
                 <li>
                <span>

                    <i class="fas fa-user-alt"></i>
                   <label>

                        <router-link to="/account">
       
                     
                        Account
       
                    </router-link>
                   </label>
                    
                    </span> 
                    </li>
               
                    <li>
                         <span>
                             
                             
                             <i class="fas fa-user-plus"></i>
                             <label>
                                 <router-link to="/projects" >
                                     Your Projects
                                 </router-link>
                             </label>

                              </span>
                         </li>
                    
                    
                    <li>
                        <span> 
                            <i class="fas fa-users-cog"></i>
                            <label for="">
                            <router-link to="/teams">
                                Teams
                            </router-link>
                            </label>

                            </span> 
                        </li>
                    
     
                    
                    
              
                      
                
                    
                    <li>
                        <span> 
                            <i class="far fa-handshake"></i>
                             <label for="">
                            <router-link to="/collaborate">
                                Collaborate
                            </router-link>
                             </label>
                            </span>
                        </li>
                    
                     
                    <li class="d-md-none ">
                        <span>
                            <i class="fas fa-user-friends"></i>
                            <label for="">
                                 <router-link to="/friends">
                                Friends
                            </router-link>
                            </label>
                        </span>
                    </li>
                    
                     <li>
                         
                         <span>

                             <i class="fas fa-sign-in-alt"></i>
                             <label >
                         
                             <router-link to="/signup">
                             SignUp or login</router-link>
                             
                             </label>
                             </span></li>
                     
                      
                
                    
                
                    
                    
            </ul>
        </section>
</div>


</template>

<script>

export default {
data(){
    return{
        downnavisActive:true
    }
}
,
    methods:{

 openNav() {
     this.downnavisActive=false;
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
},

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
closeNav() {
    this.downnavisActive=true;
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

    }
}
</script>

<style scoped>

/* .sidebarcol{
    position:sticky;
    top:100px;
} */
/* The sidebar menu */
.sidebar {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: white; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
}

/* The sidebar links */
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* The button used to open the sidebar */
.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}
ul{
    list-style: none;
    padding-left: 0px;

}

.openbtn:hover {
  background-color: #444;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s; /* If you want a transition effect */
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
</style>