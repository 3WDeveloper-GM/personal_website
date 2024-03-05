<template>
   <div class="container-basic">
      <i>a</i>
      <i>b</i>
      <i>c</i>
   </div>
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>

* {
   margin: 0;

}

.container-basic {
   display: grid;
   grid-template-rows: 90vh 10vh;
   background-image: url("../assets/images/dominik-dombrowski-KNUp-YBwBSE-unsplash.jpg");
   background-size: cover;
   background-repeat: no-repeat;
   height: 100vh;
   width: 100%;
   object-fit: cover;
}

</style>