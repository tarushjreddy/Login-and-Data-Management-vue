<template>
<div>

  <HaederPart msg="Welcome to Your Vue.js App"/>
  <LoginPage/>
  </div>
</template>

<script>
import HaederPart from './components/HelloWorld.vue'
import LoginPage from './components/login.vue'

export default {
  name: 'App',
  components: {
    HaederPart,
    LoginPage
  }
}
</script>

<style>
body{
  margin: 0px;
}
</style>
