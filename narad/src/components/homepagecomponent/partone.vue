<template>
<div class=" container bg-dark h-75 ">
<div id="main" class="row" style="background-color:grey" >
  <button class="openbtn" @click="openNav" ><i class="fas fa-chevron-right" style="color:red; border:none "></i></button>
  <div  class=" d-flex flex-column  "  >

      <div class="row mt-3">
                          <span>

                    <i class="fas fa-user-alt"></i>
                        <router-link to="/account"> Account
       
                    </router-link>
                  
                    
                    </span> 
      </div>
      <div class="rows mt-3">

                                   <span>
                             
                             <i class="fas fa-user-plus"></i>
                       
                                 <router-link to="/projects" >
                                     Your Projects
                                 </router-link>
                    

                              </span>
      </div>
      <div class="row mt-3">

                            <span> 
                              <i class="fas fa-users-cog"></i>
                            <router-link to="/teams">
                                Teams
                            </router-link>
                           

                            </span> 
      </div>
      <div class="row mt-3">

                                  <span> 

                             <i class="far fa-handshake"></i>
                            <router-link to="/collaborate">
                                Collaborate
                            </router-link>
                          
                            </span>
      </div>
      <div class="row mt-3">

                            <span>

                             <i class="fas fa-sign-in-alt"></i>

                             <router-link to="/signup">
                             SignUp or login</router-link>
                     
                             </span>
      </div>
  </div>
</div>
</div>
</template>

<script>
export default {


    methods:{


      openNav() {
  document.getElementById("mySidebar").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
},

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
 closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

    }
}
</script>


<style scoped>
.parentdiv>ul>li{
  width:300px;
  margin-left:10px;
  margin-top: 10px;
}

#firstelement{
  margin-top: 0px;
}
.parentdiv{
  position: relative;
    visibility: visible;
    /* background-color: white;
    width:450px;
    height: 85vh; */
}
.parentdiv1{
    
      background-color: black;
    width:450px;
    height: 85vh;
}
li{
    margin:25px;
    list-style: none;
    font-size: 25px;
    box-shadow: 3px 4px 40px grey;
    border-radius: 5px;
    padding-left: 10px;
    cursor: pointer;
}
li:hover{
    font-size: 30px;
    box-shadow: 3px 4px 30px grey;
}
i{
    padding-left: 1px;
}
a{
    text-decoration: none;
} 

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
  font-size: 25px;
  color: black;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: grey;
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
  visibility: hidden;
}

.openbtn:hover {
  background-color: #444;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s; /* If you want a transition effect */
  padding: 0px;
  background-color: RED;
}
span{
    font-size: 22px;
    margin-left:-10px;
    margin-bottom: 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
/* 
@media screen and (min-height:972px) and (max-height:0px){
  
  
} */
@media screen and (min-width: 0px) and (max-width: 992px) {
  .openbtn{visibility: visible;}
  .parentdiv{ visibility: hidden;}
}

</style>