<template>
<div v-if="isOpen && isLoading">
  <div class="login_page"  @click="isOpen=false">
 
  </div>
  <div class="ord">

      <div class="main_one">
          <div class="ogo_pro" @click="$emit('openLoginMod')">
            <div >Login</div>
            <button @click="LoginwithGoogle">LoginWithGoogle</button>

            <form @submit.prevent="submit">
              <h6 >Email or Username</h6>
              <input v-model="email" type="email" placeholder="username and Email">
               <h6 >Password</h6>
              <input v-model="password" type="password" placeholder="Password">
              <button @click="submit">Submit</button>
          </form>

          </div>
       
             
      </div>
  </div>
  </div>
</template>
<script>
import firebase from "../firebase.js"
export default {
    
    data(){
        return{
       
                email:'',
                password:'',
            
            isOpen: true
            ,  isLoading: true,
        };
    },
    methods:{
        LoginwithGoogle(){
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
     this.isLoading = false

        },
        submit(){
firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
    console.log(res)
     this.isLoading = false
}).catch(error => {
    console.log(error)
    this.isLoading= false

})
        },
    },
}
</script>
<style>
.login_page{
    color: black;
    height: 100vh;
    width: 100vw;
    background-color: rgb(155, 155, 155);
    font-family: 'Poppins', sans-serif;
    position: fixed;
    top: 0;
    opacity: 80%;
    z-index: 30;
    transition: all 200ms ease-in-out;

}
.ord{
    position: absolute;
     transition: all 200ms ease-in-out;

    top: 0;
}
h6{
    color: black;
}
.main_one{
    display: flex;
    flex-direction: column;
    width: 100%;
    display: absolute;
     transition: all 200ms ease-in-out;
top: 50;
}
.ogo_pro{
    background-color: blanchedalmond;
      z-index: 40;
      min-width: 500px;
}
.ogo{
background-color: white;
display: absolute;
font-size: 30px;
top: 50;
padding: 20px;
margin-left: 50%;
margin-right: auto;
 transition: all 200ms ease-in-out;
  z-index: 40;

}
</style>