import { defineStore } from "pinia" 
import { ref } from "vue" 

export const useSidebarStore = defineStore('counter', () => {
    const isSidebarOpen = ref(false);

    const toggleSideBar = (): void => {
        isSidebarOpen.value = !isSidebarOpen.value;
    }

    const turnOffSidebar = (): void => {
        isSidebarOpen.value = false
    }

    return {
        isSidebarOpen,
        toggleSideBar,
        turnOffSidebar
    }
})