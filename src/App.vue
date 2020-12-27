<template>
<div>

  <HaederPart msg="Welcome to Your Vue.js App"/>
  <LoginPage/>
  </div>
</template>

<script>
import HaederPart from './components/HelloWorld.vue'
import LoginPage from './components/login.vue'
import firebase from "./firebase.js"
export default {
  name: 'App',
  components: {
    HaederPart,
    LoginPage
  },
  data(){
return{
  isAuthen: false,
  authedUser: {},

};
  },
  mounted(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    this.isAuthen= true,
    this.authedUser = user,
    console.log(user)
  } else {
        this.isAuthen= false,
    this.authedUser = {},
console.log(
  "sex"
)
  }
});
}
  
}

</script>

<style>
body{
  margin: 0px;
}
</style>
