<template>
  <Banner></Banner>
  <HomeNew></HomeNew>
  <HomeHot></HomeHot>
  <!-- <HomeProduct></HomeProduct> -->
</template>
<script setup>
import Banner from './components/Banner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
// import HomeProduct from './components/HomeProduct.vue'

</script>

<style>
.div{
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>