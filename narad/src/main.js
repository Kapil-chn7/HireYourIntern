import { createApp} from 'vue'
import axios from 'axios'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import homepage from '../src/components/pages/homepage'
import profile from '../src/components/pages/profile'
import profileEdit from '../src/components/pages/editProfile'
import createProject from '../src/components/pages/createProject'
import homepagecomp from '../src/components/layout/header'
import simplebar from 'simplebar-vue';
import account from '../src/components/pages/Account';
import teams from '../src/components/pages/teams';
import yourProjects from '../src/components/pages/yourProjects';
import collaborate from '../src/components/pages/collaborate'
import people from '../src/components/pages/people';
import friendListPage from '../src/components/pages/friends.vue';
import register from '../src/components/pages/register.vue';
import signupform from '../src/components/profilecomp/signuporlogin.vue';
import signjoinform from '../src/components/profilecomp/signupcomp.vue'
import search from '../src/components/pages/search'
import 'simplebar/dist/simplebar.min.css';
import VueCookies from 'vue3-cookies'
import store from "../store/store"
// import VueCryptojs from 'vue-cryptojs'

 

const router=createRouter({
    routes: [
        {path:'/home', component:homepage,meta:{requiresAuth:true}},
        {path:'/auth/google/Profile', component:profile,meta:{requiresAuth:true}},
        {path:'/createProject', component:createProject,meta:{requiresAuth:true}},
        {path:'/homepagecomp',component:homepagecomp,meta:{requiresAuth:true}},
        {path:'/account',component:account,meta:{requiresAuth:true}},
        {path:'/people',component:people,name:'people',meta:{requiresAuth:true}},
        //signup route is here
        {path:'/signup',name:'signup',component:signupform},
        {path:'/register',name:'register',component:register},
        {path:'/joinsignup', component:signjoinform},
        {path:'/editProfile', component:profileEdit, meta:{requiresAuth:true}},
        {path:'/projects', component:yourProjects,meta:{requiresAuth:true}},
        {path:'/teams', component:teams,meta:{requiresAuth:true}},
        {path:'/search',component:search,meta:{requiresAuth:true}},
        {path:'/collaborate',component:collaborate,meta:{requiresAuth:true}},
        {path:'/friends',component:friendListPage,meta:{requiresAuth:true}}
     
    ],
    history:createWebHistory()
});

//router guards
router.beforeEach(async(to,from,next)=>{

  var loggedIn=false;
   
  console.log(loggedIn,"....",from.path,to.path)

      
      var userIsLoggedIn=store.getters.getuserIsLoggedIn;
      console.log("UserLoggedIn",userIsLoggedIn)
    if(!userIsLoggedIn && to.meta.requiresAuth){
  
      try{
        await axios('http://localhost:5000/checkCookies',{method:"post",withCredentials:true})
    .then((resp)=>{
      console.log("This is The responsess",resp.data);
      if(resp.data.exist==false){
        console.log("User do not exist");
        store.commit('changePath',to.path);
    //  router.push('/signup');
    
    store.commit('userIsLoggedInChange',false)
    
        
      }
      else if(resp.data.exist==true){
        console.log("he exist");
    
        store.commit('userIsLoggedInChange',true);
        store.commit('userId',resp.data.userId);
     
        // router.push('/home')
      }
      
 
    })
    .catch(err=>{
      console.log("Thsi si the error",err);
  
      store.commit('userIsLoggedInChange',false);
      store.commit('changePath',to.path);
    })
   
}
  catch(err){
    console.log("THis is the error form the catch block",err);

    store.commit('userIsLoggedInChange',false);
    store.commit('changePath',to.path);
  }
      
  if(!store.getters.getuserIsLoggedIn){
    console.log("Inside of the meta")
    next('signup');
  }
  else{
    next();
  }

    }
         
else{
  console.log("This is inside of the else")
  next();
}

})




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




export default {
    components: {
      simplebar
    }
  };

app.mount('#app')

