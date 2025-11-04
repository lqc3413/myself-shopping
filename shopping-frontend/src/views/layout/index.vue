<script setup>
import Nav from './components/Nav.vue'
import Foot from './components/Foot.vue'
import Head from './components/Head.vue'
import Fix from './components/Fix.vue'
</script>

<template>
  <Nav></Nav>
    <Fix></Fix>
  <Head></Head>
  <RouterView></RouterView>
  <Foot></Foot>
</template>

<style lang="scss" scoped>

</style>