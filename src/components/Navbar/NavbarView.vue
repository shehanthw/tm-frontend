<template>
  <div
    class="absolute w-screen bg-[#1D2125] h-[60px] border-b border-neutral-600 flex items-center"
  >
    <div class="px-3 flex w-full justify-between items-center">

      <!-- Sidebar Menu icon -->
      <div 
        class="border px-1 py-1 border-neutral-600 hover:border-neutral-400 rounded-md cursor-pointer" 
        @click="counterStore.toggleSideBar"
      >
        <Bars3Icon class="h-6 w-6 text-gray-400 cursor-pointer" />
      </div>

      <div class="px-3 flex w-full justify-end space-x-4">
        <!-- button -> create new task -->
        <router-link class="px-3 py-1 hover:bg-blue-300 text-blue-900 bg-blue-400 rounded-sm text-sm flex justify-center items-center" to="/tasks/create">
          Create
        </router-link>

        <!-- text feilds to search tasks -->
        <div>
          <input
            type="text"
            placeholder="Search"
            class="outline-none px-2 py-1 bg-[#1D2125] border border-neutral-600 text-neutral-300"
          />
        </div>

        <!-- profile name -->
        <div>
          <div
            class="rounded-full w-8 h-8 text-blue-100 border border-neutral-500 flex justify-center items-center text-xs"
          >
            {{ activeUser }}
          </div>
        </div>

        <!-- logout button -->
        <div>
          <button class="rounded-full hover:bg-red-300 text-red-900 bg-red-400 text-sm w-8 h-8" @click="handleLogout">
            O
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/solid'
import { useSidebarStore } from "../../store/index"
import { logout } from '@/api/Auth'

export default {
  data() {

    const name = localStorage.getItem('name') || ""

    const breakName = name.split(' ')
    const initOne = breakName[0]?.charAt(0) || ""
    const initTwo = breakName[1]?.charAt(0) || ""
    const activeUser = `${initOne}${initTwo}`

    return {
      activeUser
    }
  },
  components: {
    Bars3Icon
  },
  setup() {
    const counterStore = useSidebarStore()

    return {
      counterStore
    }
  },

  methods: {
    handleLogout() {
      this.counterStore.setLoadingOn()
      logout().then(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        localStorage.removeItem('userId')
        this.counterStore.setLoadingOff()
        window.location.reload()
      })
    }
  }
}
</script>
