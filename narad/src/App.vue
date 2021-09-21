<template>
  
  <div id="app">
    <headercomp/>
    <bodycomp/>
    <!-- <footercomp/> -->



  </div>
</template>

<script>

import headercomp from './components/layout/header'
import bodycomp from './components/layout/body'
// import footercomp from './components/layout/footer'
export default {
  name: 'App',
  components: {
    headercomp,
    bodycomp,
    // footercomp
 
  }
}
</script>


<style >
*{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
::-webkit-scrollbar{
    width:12px;
    
}
::-webkit-scrollbar-thumb{
    background: linear-gradient(transparent,#30ff00);
    border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover{
    background: linear-gradient(transparent,#2212b8);
}
  
</style>