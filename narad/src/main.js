import { createApp} from 'vue'
import axios from 'axios'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import homepage from '../src/components/pages/homepage'
import search from '../src/components/pages/search'
import profile from '../src/components/pages/profile'
import profileEdit from '../src/components/pages/editProfile'
import chat from '../src/components/pages/chat'
import homepagecomp from '../src/components/layout/header'
import simplebar from 'simplebar-vue';
import account from '../src/components/pages/Account';
import people from '../src/components/pages/people';
import signupform from '../src/components/profilecomp/signuporlogin.vue';
import signjoinform from '../src/components/profilecomp/signupcomp.vue'
import 'simplebar/dist/simplebar.min.css';
import VueCookies from 'vue3-cookies'
import store from "../store/store"
// import VueCryptojs from 'vue-cryptojs'

 

const router=createRouter({
    routes: [
        {path:'/home', component:homepage,
      beforeEnter:async(to)=>{
      //   const { $cookies } = router.app.config.globalProperties
      //   var loggedIn=false;
      //   var cookieValue=$cookies.get('session_Id') 
      //   console.log("value",cookieValue);
      //   if(cookieValue==null ){

      //     loggedIn==false;
      //     next({
      //       path:"/signup"
      //     })
    
      //    }
      //    else {
      //     axios.post('/api/validateUser',cookieValue)
      //     .then(resp=>{console.log("User exist",resp)})
      //     .catch(err=>console.log("This is the error",err))
      // }

      // }
    
    
    
    
    
    
    

      var loggedIn=false;
          
console.log(loggedIn)

      //   try{
      //     var cookieValues=await axios.post('http://localhost:5000/checkCookies');
      //   console.log("cookieValuessss",cookieValues.data);
      //   if(cookieValues==false ){

      //     loggedIn=false;
      //     console.log("l0",loggedIn)
      //     next({
      //       path:"/signup"
      //     })
    
      //    }
      //    else {
      //     axios.post('/api/validateUser',cookieValues)
      //     .then(resp=>{console.log("User exist",resp)})
      //     .catch(err=>console.log("This is the error",err))
      // }

      //   }
      //   catch(err){
      //     console.log("This is is the error",err)
      //   }
        

    
      try{
        axios('http://localhost:5000/checkCookies',{method:"post"
    ,withCredentials:true})
    .then((resp)=>{
      console.log("This is The responsess",resp.data);
      if(resp.data.exist==false){
        console.log("User do not exist");
        store.commit('changePath',to.path);
     router.push('/signup');
    
        
      }
      else{
        console.log("he exist");
        router.push('/home')
      }
      
 
    })
    .catch(err=>{
      console.log("Thsi si the error",err);
    })
    // console.log("cookieValuessss",cookieValues.data.exist);
    // if(cookieValues.data.exist==false ){

    //   loggedIn=false;
    //   console.log("l0",loggedIn)
    //   next({
    //     path:"/signup"
    //   })

    //  }
  //    else {
  //    await axios.post('/api/validateUser',cookieValues.data.cookievalue)
  //     .then(resp=>{console.log("User existdafasdffa",resp);

  //     next({name:'people'})
    
    
    
  //   })
  //     .catch(err=>console.log("This is the error",err))
  // }
}
  catch(err){
    console.log("THis is the error form the catch block",err)
  }
        }},
        {path:'/auth/google/Profile', component:profile},
        {path:'/Seach/:Search', component:search},
        {path:'/auth.google/Profile/Chat/:userid', component:chat},
        {path:'/homepagecomp',component:homepagecomp},
        {path:'/account',component:account},
        {path:'/people',component:people,name:'people',
        beforeEnter:async(to,from)=>{
          

          var loggedIn=false;
          console.log("this sito and fron",to,from,loggedIn)


          


        //   try{
        //     var cookieValues=await axios.post('http://localhost:5000/checkCookies');
        //   console.log("cookieValuessss",cookieValues.data);
        //   if(cookieValues==false ){
  
        //     loggedIn=false;
        //     console.log("l0",loggedIn)
        //     next({
        //       path:"/signup"
        //     })
      
        //    }
        //    else {
        //     axios.post('/api/validateUser',cookieValues)
        //     .then(resp=>{console.log("User exist",resp)})
        //     .catch(err=>console.log("This is the error",err))
        // }

        //   }
        //   catch(err){
        //     console.log("This is is the error",err)
        //   }
          

          try{
            axios('http://localhost:5000/checkCookies',{method:"post"
        ,withCredentials:true})
        .then((resp)=>{
          console.log("This is The responsess",resp.data);
          if(resp.data.exist==false){
            console.log("User do not exist");
            store.commit('changePath',to.path);
         router.push('/signup');
        
            
          }
          else{
            console.log("he exist");
            router.push('/people')
          }
          
     
        })
        .catch(err=>{
          console.log("Thsi si the error",err);
        })
        // console.log("cookieValuessss",cookieValues.data.exist);
        // if(cookieValues.data.exist==false ){

        //   loggedIn=false;
        //   console.log("l0",loggedIn)
        //   next({
        //     path:"/signup"
        //   })
    
        //  }
      //    else {
      //    await axios.post('/api/validateUser',cookieValues.data.cookievalue)
      //     .then(resp=>{console.log("User existdafasdffa",resp);

      //     next({name:'people'})
        
        
        
      //   })
      //     .catch(err=>console.log("This is the error",err))
      // }
    }
    catch(err){
      console.log("THis is the error form the catch block",err)
    }
  
        }
      },
        {path:'/signup',name:'signup',component:signupform,
      
      
      },
        {path:'/joinsignup', component:signjoinform},
        {path:'/editProfile', component:profileEdit}
        // {
        //   // path: "*",
        //   : "/:catchAll(.*)",
        //   name:path "NotFound",
        //   component: signupform
        // }
    ],
    history:createWebHistory()
});


//this is for the authentication
import GAuth from 'vue3-google-oauth2'



const app=createApp(App);



const gAuthOptions = { clientId: '74755662919-9uthu46ev4a2hff3cti5t6cml19fqmcs.apps.googleusercontent.com', scope: 'email', prompt: 'select_account', fetch_basic_profile: true }
app.use(GAuth, gAuthOptions)




// app.use(VueCryptojs);
app.use(VueCookies)
app.use(router)
app.use(store)
router.app = app



// router.beforeEach((to,from,next)=>{
//   console.log("a",axios);
 
//   console.log("to and from",to, from,++i);

// console.log("This isro ",to, from)
// console.log("coo",VueCookies)
//    // Code that will run only after the
//    // entire view has been rendered

//    if( i<=1){

     
//    }
 
   
 

 
// })
export default {
    components: {
      simplebar
    }
  };

app.mount('#app')

