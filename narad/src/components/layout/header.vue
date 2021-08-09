<template>
  <div class="col-1">

      <div class="col-1-1">

          <div class="search-col1">
                <input type="text" placeholder="Search" >
                <i class="fas fa-search" arial-hidden="true"></i>
                

          </div>
          
      </div>
        <div class="col-2">

       <router-link to="/home">
       
       <i class="fas fa-home"></i>
       <span class="spanlink">
           Home
       </span>
       
       </router-link>
       <router-link to="/people">
       
       <i class="fas fa-user-friends"></i>
       <span class="spanlink">
           People
       </span>
       
       </router-link>
       <router-link to="/Search">
       
       <i class="fas fa-globe"></i>
       <span class="spanlink">
           Globe
       </span>
       
       </router-link>
       <router-link to="/auth/google/Profile/Chat">
       
       <i class="fas fa-project-diagram"></i>
       <span class="spanlink">
           Create Project
       </span>
       </router-link>

        
    </div>
    <div class="col-1-2">
        <h1>hi2</h1>
    </div>

  
  </div>


</template>

<script>
export default {
    name:'headercomp',

    
}
</script>

<style scoped>
    
    /* div{
        width:100vw;
        height: 10vh;
        border:0px solid black;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    a{
        font-size: 25px;
        text-decoration: none;
        font-family: 'Potta One', cursive;
    } */

    .col-1{
        border:0px solid black;
        height: 100vh;
        width:100%;
       position: absolute;
       background-color: red;
        display:flex;
        

    }
    .col-2{
        border:1px solid black;
        position: relative;
        width:60%;
        height:60px;
            display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: whitesmoke;
        /* top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); */
    }
     a{
        font-size: 25px;
        text-decoration: none;
        font-family: 'Potta One', cursive;
    }

    .col-1-1{
        border:1px solid black;
        width:350px;
        height:60px ;
        background-color: yellow;
     
      
    }
      .col-1-2{
        border:1px solid black;
        width:350px;
        height:60px ;
        background-color: yellow;
     
      
    }
    .search-col1{
        position: relative;
        width:350px;
        height:60px;
        
    }

    .search-col1 input{
        position: absolute;
        width:250px;
        height: 40px;
        border-radius: 18px;
        margin:10px;
        margin-left: 80px;
        padding-left: 50px;
        font-size: 18px;
        box-shadow: 3px 4px 40px darkgray
        
    }
    .search-col1 i{
       position: absolute;
        top:20px;
        left:90px;
        font-size: 20px;
    }
   .spanlink{
        position: relative;
        visibility: hidden;
        top:30px;
        margin-left: -40px;
        font-size: 15px;
        color: white;
        background-color: black;
        border-radius: 5px;
    }
    a:hover .spanlink{
        visibility: visible;
        
    }
</style>