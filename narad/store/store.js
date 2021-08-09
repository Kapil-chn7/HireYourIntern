import { createStore } from "vuex" 
import axios from 'axios'
// import { param } from "../../routes/routes";
const store = createStore({
   state:{
      path:'Home',
      showLoader:false,
      userImage:null,


      //this is the user profile
      userProfile:null,

   },
   mutations:{

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
       }
   },
   actions:{
       getUserData:async(context,payload)=>{
        const data=await axios.get('/api/userdata',{params:{payload}})
        console.log("This is datasssss",data.data);
        context.commit('changeUserInfo',data.data);
        context.commit('changeshowLoader');
        // var arr=data.data.userdata.userImage.split('"');
        var arr=data.data.userdata.userImage;

        console.log("data",data.data.userdata.userImage)
        context.commit('changeUserImage',arr)
        
       }
   }

})

export default store