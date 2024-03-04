<template>
  <div
    class="absolute w-[250px] bg-[#22272E] h-[calc(100vh-60px)] border-r border-neutral-700 bg-opacity-80"
  >
    <div class="flex flex-col space-y-2 text-sm p-3">
      <router-link
        class="px-4 py-3 flex items-center text-blue-200 cursor-pointer hover:bg-blue-400 hover:bg-opacity-70 rounded-md"
        to="/"
        @click="sidebarStore.turnOffSidebar"
      >
        <span>Home</span>
      </router-link>

      <router-link
        class="px-4 py-3 flex items-center text-blue-200 cursor-pointer hover:bg-blue-400 hover:bg-opacity-70 rounded-md"
        to="/tasks"
        @click="sidebarStore.turnOffSidebar"
      >
        <span>Tasks</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { useSidebarStore } from '../../store/index'

export default {
  setup() {
    const sidebarStore = useSidebarStore()
    return {
      sidebarStore
    }
  }
}
</script>
