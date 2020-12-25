<template>
<div v-if="isOpen">
  <div class="login_page"  @click="isOpen=false">
 
  </div>
  <div class="ord">

      <div class="main_one">
          <div class="ogo" @click="$emit('openLoginMod')">Login</div>
             
      </div>
  </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            isOpen: true
        };
    }
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
.main_one{
    display: flex;
    width: 100%;
    display: absolute;
     transition: all 200ms ease-in-out;
top: 50;
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