<template>
  <!-- <Navbar v-if="showNavbar" /> -->
  <div v-if="showNavbar">
    <Navbar />
    asdasd
  </div>

  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar/Navbar.vue'

export default {
  data() {
    return {
      showNavbar: true
    }
  },
  watch: {
    $route(to, from) {
      this.showNavbar = !['login'].includes(to.name)
    }
  }
}
</script>
