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
  
</style>