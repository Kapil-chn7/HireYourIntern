import { createStore } from "vuex" 
import axios from 'axios'
// import { param } from "../../routes/routes";
const store = createStore({
   state:{
       userId:null,
       userIsLoggedIn:false,
      path:'Home',
      showLoader:false,
      userImage:null,
      authentication_Id:null,


      //this is the user profile
      userProfile:null,

   },
   mutations:{
       userId:(state,payload)=>{
        state.userId=payload;
       },
       userIsLoggedInChange:(state,payload)=>{
        state.userIsLoggedIn=payload;
       },
        authentication_IdChange:(state,payload)=>{
            state.authentication_Id=payload
        },
        changePath: (state,payload)=>{
            state.path=payload;
            
        },
        changeUserInfo:(state,payload)=>{
            state.userProfile=payload;
            console.log("Isnisde of the mutations",payload)
        },
        changeshowLoader: state=>{
            return state.showLoader=false;
        },
        changeUserImage: (state,payload)=>{
            // const url=new Blob([],{type:'image/png'});
            // const imageUrl=URL.createObjectURL(url);
            console.log("payload",typeof(payload)   ,payload)
            return state.userImage=payload;
        }
      
   },
   getters:{
    getPath:  state =>{

        return state.path;
       },
       getProfile: state=>{
           return state.userProfile;
       },
       getuserIsLoggedIn: state=>{
           return state.userIsLoggedIn
       }
   },
   actions:{
       getUserData:async(context)=>{
           const userId=store.state.userId
        const data=await axios.get('/api/userdata',{params:{userId}})
        console.log("This is datasssss",data.data);
        context.commit('changeUserInfo',data.data);
        context.commit('changeshowLoader');
        // var arr=data.data.userdata.userImage.split('"');
        

        
        
        
       }
   }

})

export default store