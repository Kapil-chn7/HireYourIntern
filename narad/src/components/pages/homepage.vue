<template>
    <div class="parentcol">

        <div class="col0" id="blur" >
        <div class="col-1">

                <partone/>
        </div>
       
        <simplebar class="col-3" data-simplebar-auto-hide="false">
   
                    <status class="status"/>
                    <sharepost class="sharepost"/>
                    <div class="dummy">

                    </div>
                    <div class="dummy">

                    </div>
                    <div class="dummy">

                    </div>
                    <div class="dummy">

                    </div>
                    <div class="dummy">

                    </div>
                    <div class="dummy">

                    </div>
                    <div class="dummy">

                    </div><div class="dummy">

                    </div>
                    <div class="dummy">

                    </div>
                    <div class="dummy">

                    </div>
                    <div class="dummy">

                    </div>
                    <div class="dummy">

                    </div>
                    <div class="dummy">

                    </div>
                    

        </simplebar>
        
        
        <div class="col-2">

            <h1>part two</h1>
        </div>
    </div>
    <div>
        <sharepostcomp/>
    </div>
    

    </div>
</template>

<script>

import partone from "../homepagecomponent/partone"
import status from "../profilecomp/status"
import sharepost from "../homepagecomponent/popup"
import sharepostcomp from "../homepagecomponent/post"
export default {
    name:'homepagecomp',
    components:{
       status,
       sharepost,
       sharepostcomp,
       partone
       
    }
}
        
</script>


<style scoped>

.col-1{
    position: absolute;
    border:0px solid yellow;
    height:90vh;
    width:350px;
    background-color: yellow;
    top:65px;
}
.col-2{
    position:absolute;
    right: 0px;
    border:0px solid yellow;
    height:90vh;
    width:350px;
    background-color: yellow;
     top:65px;
}

.status{
    position: relative;
    top:20px;
}
.sharepost{
    position: relative;
    top:20px;
    margin-left: 30px;
    
}
.col-3{
    position: absolute;
    width:820px;
    height: 90vh;
    background-color: black;
    overflow: auto;
    left:350px;
    top:60px;
}

.col0{
    transition: 0.5s;
    width:100%;
    height: 90vh;
}
.col0#blur.active{
    filter:blur(20px);
    pointer-events: none;
    user-select: none;
}
.parentcol{
     transition: 0.5s;
    width:100%;
    height: 90vh;
}

.dummy{
    height:400px;
    width:500px;
    background-color: orange;
    margin:40px;
}
</style>
