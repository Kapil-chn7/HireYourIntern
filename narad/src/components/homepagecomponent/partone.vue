<template>
    <div class="parentdiv">

        <section>
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
                                 Your Projects
                             </label>

                              </span>
                         </li>
                    
                    
                    <li>
                        <span> Teams

                            </span> 
                        </li>
                    
     
                    
                    
              
                      
                
                    
                    <li>
                        <span> Collobate

                            </span>
                        </li>
                    
                     
                
                    
                     <li>
                         
                         <span>

                             <i class="fas fa-search-location"></i>
                             <label >
                             <!-- Near Your Location -->
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
    
}
</script>


<style scoped>

.parentdiv{
    margin:10px;
    background-color: white;
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
</style>