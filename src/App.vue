<template>
  <!-- <Navbar v-if="showNavbar" /> -->
  <div v-if="showNavbar">
    <Navbar />
  </div>

  <div class="absolute mt-[60px] w-screen h-[calc(100vh-60px)] bg-[#1D2125]"><RouterView /></div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar/NavbarView.vue'

export default {
  components: {
    Navbar
  },
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
