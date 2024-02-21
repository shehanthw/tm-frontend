<template>
  <!-- <Navbar v-if="showNavbar" /> -->
  <Navbar v-if="showNavbar" />
  <div class="absolute mt-[60px] w-screen h-[calc(100vh-60px)] bg-[#1D2125] overflow-auto">
    <Sidebar v-if="sidebarstore.isSidebarOpen" />
    <RouterView />
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar/NavbarView.vue'
import Sidebar from './components/Sidebar/SidebarView.vue'
import { useSidebarStore } from "./store/index"

export default {
  setup() {
    const sidebarstore = useSidebarStore()
    return {
        sidebarstore
    }
  },
  components: {
    Navbar,
    Sidebar
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
