<template>
  <MobileNav v-if="isMobile" />
  <DesktopNav v-else />
  
  <router-view />
  
  <AppFooter />
</template>

<script setup>
// import { useResponsive } from './utils/responsive'
import MobileNav from './components/responsive/MobileNav.vue'
import DesktopNav from './components/responsive/DesktopNav.vue'
import AppFooter from './components/common/Footer.vue'

// const { isMobile } = useResponsive()
</script>