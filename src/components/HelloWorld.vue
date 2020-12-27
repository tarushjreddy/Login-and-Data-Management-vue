<template>
 <div class="header"><h3>Login and Data Management System</h3>


    <button class="nutton" >Login</button>
 </div>


</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
.header{
  font-family: 'Poppins', sans-serif;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background: #74b9ff;
  padding: 10px;
  box-shadow: 0.5px 0.5px 10px gray;
  color: white;

}
body{
  margin: 0px;
}
.nutton{
  outline: none;
  border: none;
  background: white;
  padding: 10px;
  float: right;
  position: fixed;
  right: 0;
}
</style>
