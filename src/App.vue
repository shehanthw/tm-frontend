<template>

  <!-- <Navbar v-if="showNavbar" /> -->
  <Navbar v-if="showNavbar" />

  <!-- loader screen -->
  <div 
    class="absolute z-50 w-screen h-[calc(100vh-60px)] mt-[60px] flex justify-center items-center backdrop-blur-sm inset-0 bg-opacity-10 bg-white" 
    v-if="sidebarstore.isLoading"
  >
    <span ><MoonLoader color="#26a69a" size="50px" /></span>
  </div>

  <!-- pop-up screen -->
  <DeleteAlert v-if="sidebarstore.isDeleteAlertOn" />

  <!-- main content -->
  <div
    class="absolute mt-[60px] w-screen h-[calc(100vh-60px)] bg-[#1D2125] overflow-auto"
    v-if="showNavbar"
  >
    <Sidebar v-if="sidebarstore.isSidebarOpen" />
    <RouterView />
  </div>

  <!-- main content 2 -->
  <div class="absolute w-screen h-[100vh] bg-[#1D2125] overflow-auto" v-if="!showNavbar">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Bars3Icon } from '@heroicons/vue/24/solid'
import Navbar from './components/Navbar/NavbarView.vue'
import Sidebar from './components/Sidebar/SidebarView.vue'
import Alert from './components/Common/Alert.vue'
import { useSidebarStore } from './store/index'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import DeleteAlert from './components/Common/DeleteAlert.vue' 

export default {
  setup() {
    const sidebarstore = useSidebarStore()
    return {
      sidebarstore
    }
  },
  components: {
    Navbar,
    Sidebar,
    Alert,
    MoonLoader,
    DeleteAlert
  },
  data() {
    return {
      showNavbar: true
    }
  },
  watch: {
    $route(to, from) {
      this.showNavbar = !['login', 'register'].includes(to.name)
    }
  }
}
</script>
